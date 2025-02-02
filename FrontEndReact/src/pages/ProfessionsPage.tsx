

import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import '../styles/ProfessionsPage.css';
import { deleteProfession, getAllProfessions } from '../services/ProfesionServices';
import { Profesion } from '../models/profesiones';
import ProfessionForm from '../components/Profesiones/ProfessionForm';
import DataTable from '../components/Tables/Datatable';
import ProfessionFormEdit from '../components/Profesiones/ProfessionFormEdit';


const ProfessionsPage: React.FC = () => {

    const [profesiones, setProfesiones] = useState<Profesion[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [editProfesion, setEditProfesion] = useState<Profesion | null>(null);

    const fetchProfesiones = async () => {
        try {
            const resp = await getAllProfessions();
            setProfesiones(resp);
            console.log(resp);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    useEffect(() => {
        fetchProfesiones();
    }, []);

    const handleEdit = (profesion: Profesion) => {
        setEditProfesion(profesion);
        setOpenModalEdit(true);

    };

    const handleDelete = async (id: number) => {
        try {
            await deleteProfession(id);
            fetchProfesiones();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div className="users-container">
            <Typography variant="h4">Profesiones</Typography>
            <Button
                type='submit'
                variant='outlined'
                onClick={() => setOpenModal(true)}
            >
                Agregar Profesión
            </Button>
            <ProfessionForm
                handleUpdate={fetchProfesiones}
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
            <ProfessionFormEdit
                open={openModalEdit}
                handleClose={() => setOpenModalEdit(false)}
                onProfesionCreated={fetchProfesiones}
                itemEdit={editProfesion}
            />
            <DataTable
                data={profesiones}
                columns={[
                    { key: 'id', label: 'ID' },
                    { key: 'name', label: 'Nombre Profesión' },
                ]}
                actions={(prefesion) => (
                    <div className='content-button'>
                        <Button className='table-button' variant="outlined" size='small' color="info" onClick={() => handleEdit(prefesion)}>Editar</Button>
                        <Button className='table-button' variant="outlined" size='small' color="warning" onClick={() => handleDelete(prefesion.id)}>Eliminar</Button>
                    </div>
                )}
            />
        </div>
    );
};

export default ProfessionsPage;
