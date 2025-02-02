// src/components/LocationsForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import { modalStyle } from '../Usuarios/UserForm';
import { createLocation } from '../../services/UbicacionServices';

interface Props{
    handleUpdate: any;
    open: boolean; 
    handleClose: () => void;
}
const LocationForm = ({handleUpdate, open, handleClose}:Props) => {

    const [LocationsData, setLocationsData] = useState({ name: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocationsData({ ...LocationsData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!LocationsData.name) return alert('ingresa un nombre valido');

        try {
            const response = await createLocation(LocationsData);
            if (response) {
                setLocationsData({ name: '' });
                handleUpdate();
                handleClose();
                console.log('Ubicación creada'); 
            } 
        } catch (error) {
            alert('Error al crear Ubicación');
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">Crear Ubicación</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        value={LocationsData.name}
                        onChange={handleChange}
                        placeholder="Nombre de la Ubicación"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Crear Ubicación</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default LocationForm;
