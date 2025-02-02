import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { TextField, Button, Typography, Modal, Box, Backdrop, Fade } from '@mui/material';
import { Oferta } from '../../models/ofertas';
import { User } from '../../models/users';
import { Ubicacion } from '../../models/ubicaciones';
import { Profesion } from '../../models/profesiones';
import MultipleSelect from '../Select/MultipleSelect';
import '../../styles/OffersPage.css';

interface Props {
    open: boolean;
    handleClose: () => void;
    handleUpdate: () => void;
}

const OfferForm = ({ open, handleClose, handleUpdate }: Props) => {
    const [offerData, setOfferData] = useState<Oferta>({
        title: '',
        description: '',
        price: 0,
        locationId: 0,
        professionId: 0,
        userId: 0
    });

    const [users, setUsers] = useState<User[]>([]);
    const [profesiones, setProfesiones] = useState<Profesion[]>([]);
    const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([]);

    useEffect(() => {
        fetchUsuarios();
        fetchProfesiones();
        fetchUbicaciones();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const resp = await axios.get('/users');
            setUsers(resp.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const fetchProfesiones = async () => {
        try {
            const resp = await axios.get('/professions');
            setProfesiones(resp.data);
        } catch (error) {
            console.error('Error al obtener profesiones:', error);
        }
    };

    const fetchUbicaciones = async () => {
        try {
            const resp = await axios.get('/locations');
            setUbicaciones(resp.data);
        } catch (error) {
            console.error('Error al obtener ubicaciones:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setOfferData({ ...offerData, [name]: value });
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/offers', offerData);
            console.log(response);
            setOfferData({
                title: '',
                description: '',
                price: 0,
                locationId: 0,
                professionId: 0,
                userId: 0
            });
            handleUpdate();
            handleClose();
        } catch (error) {
            alert('Error al crear oferta');
            console.log(error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={open}>
                <Box className="offer-modal">
                    <Typography variant="h6" className="modal-title">Crear Oferta</Typography>
                    <form onSubmit={handleSubmit} className="offer-form">
                        <TextField
                            name="title"
                            value={offerData.title}
                            onChange={handleChange}
                            placeholder="Título"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            name="description"
                            value={offerData.description}
                            onChange={handleChange}
                            placeholder="Descripción"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            name="price"
                            type="number"
                            value={offerData.price}
                            onChange={handleChange}
                            placeholder="Precio"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />

                        <MultipleSelect
                            label="Usuarios"
                            options={users.map(user => ({ id: user.id, name: user.username }))}
                            value={offerData.userId}
                            onChange={(selected) => setOfferData({ ...offerData, userId: selected })}
                        />

                        <MultipleSelect
                            label="Profesiones"
                            options={profesiones.map(profesion => ({ id: profesion.id, name: profesion.name }))}
                            value={offerData.professionId}
                            onChange={(selected) => setOfferData({ ...offerData, professionId: selected })}
                        />

                        <MultipleSelect
                            label="Ubicaciones"
                            options={ubicaciones.map(ubicacion => ({ id: ubicacion.id, name: ubicacion.name }))}
                            value={offerData.locationId}
                            onChange={(selected) => setOfferData({ ...offerData, locationId: selected })}
                        />

                        <div className="modal-actions">
                            <Button type="submit" variant="contained" color="primary">Crear</Button>
                            <Button onClick={handleClose} variant="outlined" color="inherit">Cancelar</Button>
                        </div>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OfferForm;
