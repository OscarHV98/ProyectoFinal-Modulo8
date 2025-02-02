import axiosInstance from "../api/axiosInstance";

export const getAllOfertas = async () => {
    const response = await axiosInstance.get('/offers');
    return response.data;
};

