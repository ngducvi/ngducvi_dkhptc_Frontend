
// src/services/khoaService.js
import API_BASE_URL from '../configs/apiConfig';

export const getAllKhoa = async () => {
    const response = await fetch(`${API_BASE_URL}/khoa`);
    return await response.json();
};

export const addKhoa = async (khoa) => {
    const response = await fetch(`${API_BASE_URL}/khoa`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(khoa)
    });
    return await response.json();
};

export const updateKhoa = async (id, khoa) => {
    const response = await fetch(`${API_BASE_URL}/khoa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(khoa)
    });
    return await response.json();
};

export const deleteKhoa = async (id) => {
    await fetch(`${API_BASE_URL}/khoa/delete/${id}`, {
        method: 'DELETE'
    });
};

