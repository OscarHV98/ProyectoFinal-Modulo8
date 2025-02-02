import axios from '../api/axiosInstance';

const getAllUsers = async () => {
    const response = await axios.get('/users');
    return response.data;
};

const createUser = async (userData: { username: string; email: string; password: string }) => {
    const response = await axios.post('/users', userData);
    return response.data;
};

const updateUser = async (id: number, userData: { username?: string; email?: string; password?: string }) => {
    const response = await axios.put(`/users/${id}`, userData);
    return response.data;
};

const deleteUser = async (id: number) => {
    await axios.delete(`/users/${id}`);
};

export { getAllUsers, createUser, updateUser, deleteUser };
