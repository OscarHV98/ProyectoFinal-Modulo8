import axios from '../api/axiosInstance';

const getAllProfessions = async () => {
    const response = await axios.get('/professions');
    return response.data;
};

const createProfession = async (ProfessionData: { name: string; }) => {
    const response = await axios.post('/professions', ProfessionData);
    return response.data;
};

const updateProfession = async (id: number, ProfessionData: { name: string }) => {
    const response = await axios.put(`/professions/${id}`, ProfessionData);
    return response.data;
};

const deleteProfession = async (id: number) => {
    await axios.delete(`/professions/${id}`);
};

export { getAllProfessions, createProfession, updateProfession, deleteProfession };
