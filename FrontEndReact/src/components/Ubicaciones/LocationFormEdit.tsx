// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import { modalStyle } from '../Usuarios/UserForm';
import { updateLocation } from '../../services/UbicacionServices';

interface Props {
    onLocationCreated: () => void; 
    open: boolean; 
    handleClose: () => void;
    itemEdit?: { id: number; name: string;} | null;
}
 
const LocationFormEdit = ({ onLocationCreated, open, handleClose, itemEdit }: Props) => {

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
            const response = await updateLocation(itemEdit?.id ?? 0, userData);
            console.log(response);
            alert('Ubicación actualizado');
            setProfesion({ id: 0, name: ''});
            onLocationCreated();
            handleClose();
        } catch (error) {
            alert('Error al guardar Ubicación');
            console.log(error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">{itemEdit ? 'Editar Ubicación' : 'Crear Ubicación'}</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField name="name" value={userData.name} onChange={handleChange} placeholder="name" fullWidth margin="normal" required />
                    <Button type="submit" variant="contained" color="primary">{itemEdit ? 'Actualizar' : 'Crear'} Ubicación</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default LocationFormEdit;