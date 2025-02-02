import { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Grid, Box, Button } from '@mui/material';
import OfferForm from '../components/Ofertas/OfferForm';
import { Oferta } from '../models/ofertas';
import { getAllOfertas } from '../services/OfertaServices';
import '../styles/OffersPage.css';

const OffersPage = () => {
    const [ofertas, setOfertas] = useState<Oferta[]>([]);

    const [openModal, setOpenModal] = useState<boolean>(false);

    const fetchOfertas = async () => {
        try {
            const response = await getAllOfertas();
            setOfertas(response);
            console.log('response', response);
        } catch (error) {
            console.error('Error al obtener ofertas:', error);
        }
    };

    useEffect(() => {
        fetchOfertas();
    }, []);

    return (
        <Box className="offers-container" sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
                Ofertas de Trabajo
            </Typography>
            <Button 
                type='submit' 
                variant='outlined'
                onClick={() => setOpenModal(true)}
            >
                Agregar Oferta
            </Button>

            <OfferForm
                open={openModal}
                handleClose={() => setOpenModal(false)}
                handleUpdate={fetchOfertas} 
            />

            <Grid container spacing={3} sx={{ mt: 2 }}>
                {ofertas.length > 0 ? (
                    ofertas.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card
                                sx={{
                                    p: 2,
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    transition: '0.3s',
                                    '&:hover': { boxShadow: 6 },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: 'green' }}>
                                        ${item.price}
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Usuario: <strong>{item.User?.username}</strong>
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Ubicación: <strong>{item.Location?.name}</strong>
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Profesión: <strong>{item.Profession?.name}</strong>
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '100%', mt: 3 }}>
                        No hay ofertas disponibles
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default OffersPage;
