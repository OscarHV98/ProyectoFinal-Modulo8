import axios from '../api/axiosInstance';

const getAllLocations = async () => {
    const response = await axios.get('/locations');
    return response.data;
};

const createLocation = async (LocationData: { name: string; }) => {
    const response = await axios.post('/locations', LocationData);
    return response.data;
};

const updateLocation = async (id: number, LocationData: { name: string }) => {
    const response = await axios.put(`/locations/${id}`, LocationData);
    return response.data;
};

const deleteLocation = async (id: number) => {
    await axios.delete(`/locations/${id}`);
};

export { getAllLocations, createLocation, updateLocation, deleteLocation };
