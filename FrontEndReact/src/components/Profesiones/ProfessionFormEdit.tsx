// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import { updateProfession } from '../../services/ProfesionServices';
import { modalStyle } from '../Usuarios/UserForm';

interface Props {
    onProfesionCreated: () => void; 
    open: boolean; 
    handleClose: () => void;
    itemEdit?: { id: number; name: string;} | null;
}
 
const ProfessionFormEdit = ({ onProfesionCreated, open, handleClose, itemEdit }: Props) => {

    const [userData, setProfesion] = useState({ 
        id: itemEdit?.id ?? 0,
        name: itemEdit?.name ?? '', 
    });

    useEffect(() => {
        if (itemEdit) {
            setProfesion({
                id: itemEdit?.id ?? 0,
                name: itemEdit?.name ?? '', 
            });
        } else {
            setProfesion({ id: 0, name: '' });
        }
    }, [itemEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfesion({ ...userData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await updateProfession(itemEdit?.id ?? 0, userData);
            console.log(response);
            alert('Profesión actualizado');
            setProfesion({ id: 0, name: ''});
            onProfesionCreated();
            handleClose();
        } catch (error) {
            alert('Error al guardar Profesión');
            console.log(error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">{itemEdit ? 'Editar Profesión' : 'Crear Profesión'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField name="name" value={userData.name} onChange={handleChange} placeholder="name" fullWidth margin="normal" required />
                    <Button type="submit" variant="contained" color="primary">{itemEdit ? 'Actualizar' : 'Crear'} Profesión</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ProfessionFormEdit;