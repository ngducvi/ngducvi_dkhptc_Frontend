// src/services/chiTietHocPhanService.js

import axios from 'axios';
import API_BASE_URL from '../configs/apiConfig';

export const getAllChiTietHocPhan = async () => {
    const response = await axios.get(`${API_BASE_URL}/chitiethocphan`);
    return response.data;
};

export const addChiTietHocPhan = async (chiTietHocPhan) => {
    const response = await axios.post(`${API_BASE_URL}/chitiethocphan`, chiTietHocPhan);
    return response.data;
};

export const updateChiTietHocPhan = async (maChiTietHocPhan, chiTietHocPhan) => {
    const response = await axios.put(`${API_BASE_URL}/chitiethocphan/${maChiTietHocPhan}`, chiTietHocPhan);
    return response.data;
};

export const getChiTietHocPhanByMaLopHocPhan = async (maLopHocPhan) => {
    const response = await axios.get(`${API_BASE_URL}/chitiethocphan/lop/${maLopHocPhan}`);
    return response.data;
};

export const deleteChiTietHocPhan = async (maChiTietHocPhan) => {
    await axios.delete(`${API_BASE_URL}/chitiethocphan/${maChiTietHocPhan}`);
};
