// src/components/ProfessionForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Modal, Box } from '@mui/material';
import { createProfession } from '../../services/ProfesionServices';
import { modalStyle } from '../Usuarios/UserForm';

interface Props{
    handleUpdate: any;
    open: boolean; 
    handleClose: () => void;
}
const ProfessionForm = ({ handleUpdate, open, handleClose }:Props) => {

    const [professionData, setProfessionData] = useState({ name: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfessionData({ ...professionData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!professionData.name) return alert('ingresa un nombre valido');

        try {
            const response = await createProfession(professionData);
            if (response) {
                setProfessionData({ name: '' });
                handleUpdate();
                handleClose();
                console.log('Profesión creada'); 
            } 
        } catch (error) {
            alert('Error al crear profesión');
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6">Crear Profesión</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        value={professionData.name}
                        onChange={handleChange}
                        placeholder="Nombre de la Profesión"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">Crear Profesión</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ProfessionForm;
