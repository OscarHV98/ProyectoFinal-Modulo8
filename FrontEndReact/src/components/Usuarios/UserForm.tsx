// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../../services/UserService';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';

export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

interface Props {
    onUserCreated: () => void; 
    open: boolean; 
    handleClose: () => void;
    userToEdit?: { id: number; username: string; email: string; password?: string } | null;
}
 
const UserForm = ({ onUserCreated, open, handleClose, userToEdit }: Props) => {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        if (userToEdit) {
            setUserData({
                username: userToEdit.username,
                email: userToEdit.email,
                password: '' 
            });
        } else {
            setUserData({ username: '', email: '', password: '' });
        }
    }, [userToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (userToEdit) {
                await updateUser(userToEdit.id, userData);
                alert('Usuario actualizado');
            } else {
                await createUser(userData);
                alert('Usuario creado');
            }
            setUserData({ username: '', email: '', password: '' });
            onUserCreated();
            handleClose();
        } catch (error) {
            alert('Error al guardar usuario');
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

export default UserForm;