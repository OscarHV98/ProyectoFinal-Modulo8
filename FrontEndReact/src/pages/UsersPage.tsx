// src/pages/UsersPage.tsx
import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import '../styles/UsersPage.css';
import { User } from '../models/users';
import { deleteUser, getAllUsers } from '../services/UserService';
import UserForm from '../components/Usuarios/UserForm';
import UserFormEdit from '../components/Usuarios/UserFormEdit';
import DataTable from '../components/Tables/Datatable';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [userToEdit, setUserToEdit] = useState<User | null>(null);


    const fetchUsers = async () => {
        try {
            const usersList = await getAllUsers();
            setUsers(usersList);
            console.log(usersList)
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEdit = (user: User) => {
        setUserToEdit(user);
        setOpenModalEdit(true);

    };

    const handleDelete = async (id: number) => {
        try {
            await deleteUser(id);
            fetchUsers();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div className="users-container">
            <Typography variant="h4">Usuarios</Typography>
            <Button
                type='submit'
                variant='outlined'
                onClick={() => setOpenModal(true)}
            >
                Agregar Usuario
            </Button>
            <UserForm
                open={openModal}
                handleClose={() => setOpenModal(false)}
                onUserCreated={fetchUsers}
            />

            <UserFormEdit
                open={openModalEdit}
                handleClose={() => setOpenModalEdit(false)}
                onUserCreated={fetchUsers}
                userToEdit={userToEdit}
            />

            <DataTable
                data={users}
                columns={[
                    { key: 'id', label: 'ID' },
                    { key: 'username', label: 'Usuario' },
                    { key: 'email', label: 'Email' }
                ]}
                actions={(user) => (
                    <div className='content-button'>
                        <Button className='table-button' variant="outlined" size='small' color="info" onClick={() => handleEdit(user)}>Editar</Button>
                        <Button className='table-button' variant="outlined" size='small' color="warning" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                    </div>
                )}
            />
        </div>
    );
};

export default UsersPage;
