

import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import '../styles/ProfessionsPage.css';
import { deleteLocation, getAllLocations } from '../services/UbicacionServices';
import DataTable from '../components/Tables/Datatable';
import { Ubicacion } from '../models/ubicaciones';
import LocationForm from '../components/Ubicaciones/LocationForm';
import LocationFormEdit from '../components/Ubicaciones/LocationFormEdit';


const LocationPage: React.FC = () => {

    const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [editUbicacion, setEditUbicacion] = useState<Ubicacion | null>(null);

    const fetchUbicaciones = async () => {
        try {
            const resp = await getAllLocations();
            setUbicaciones(resp);
            console.log(resp);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    useEffect(() => {
        fetchUbicaciones();
    }, []);

    const handleEdit = (ubicacion: Ubicacion) => {
        setEditUbicacion(ubicacion);
        setOpenModalEdit(true);

    };

    const handleDelete = async (id: number) => {
        try {
            await deleteLocation(id);
            fetchUbicaciones();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div className="users-container">
            <Typography variant="h4">Ubicaciones</Typography>
            <Button
                type='submit'
                variant='outlined'
                onClick={() => setOpenModal(true)}
            >
                Agregar Ubicación
            </Button>
            <LocationForm
                handleUpdate={fetchUbicaciones}
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
            <LocationFormEdit
                open={openModalEdit}
                handleClose={() => setOpenModalEdit(false)}
                onLocationCreated={fetchUbicaciones}
                itemEdit={editUbicacion}
            />
            <DataTable
                data={ubicaciones}
                columns={[
                    { key: 'id', label: 'ID' },
                    { key: 'name', label: 'Nombre Profesión' },
                ]}
                actions={(ubicacion) => (
                    <div className='content-button'>
                        <Button className='table-button' variant="outlined" size='small' color="info" onClick={() => handleEdit(ubicacion)}>Editar</Button>
                        <Button className='table-button' variant="outlined" size='small' color="warning" onClick={() => handleDelete(ubicacion.id)}>Eliminar</Button>
                    </div>
                )}
            />
        </div>
    );
};

export default LocationPage;
