// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { updateUser } from '../../services/UserService';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import { modalStyle } from './UserForm';

interface Props {
    onUserCreated: () => void; 
    open: boolean; 
    handleClose: () => void;
    userToEdit?: { id: number; username: string; email: string; password?: string } | null;
}
 
const UserFormEdit = ({ onUserCreated, open, handleClose, userToEdit }: Props) => {

    const [userData, setUserData] = useState({ 
        id: userToEdit?.id ?? 0,
        username: userToEdit?.username ?? '', 
        email: userToEdit?.email ?? '', 
        password: userToEdit?.password ?? '', 
    });

    useEffect(() => {
        if (userToEdit) {
            setUserData({
                id: userToEdit?.id ?? 0,
                username: userToEdit?.username ?? '', 
                email: userToEdit?.email ?? '', 
                password: userToEdit?.password ?? '', 
            });
        } else {
            setUserData({ id: 0, username: '', email: '', password: '' });
        }
    }, [userToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await updateUser(userToEdit?.id ?? 0, userData);
            console.log(response);
            alert('Usuario actualizado');
            setUserData({ id: 0, username: '', email: '', password: '' });
            onUserCreated();
            handleClose();
        } catch (error) {
            alert('Error al guardar usuario');
            console.log(error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">{userToEdit ? 'Editar Usuario' : 'Crear Usuario'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField name="username" value={userData.username} onChange={handleChange} placeholder="Username" fullWidth margin="normal" required />
                    <TextField name="email" value={userData.email} type="email" onChange={handleChange} placeholder="Email" fullWidth margin="normal" required />
                    {!userToEdit && <TextField name="password" value={userData.password} type="password" onChange={handleChange} placeholder="Contraseña" fullWidth margin="normal" required />}
                    <Button type="submit" variant="contained" color="primary">{userToEdit ? 'Actualizar' : 'Crear'} Usuario</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default UserFormEdit;