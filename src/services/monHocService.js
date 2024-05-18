// src/services/monHocService.js
import API_BASE_URL from '../configs/apiConfig';

export const getAllMonHoc = async () => {
    const response = await fetch(`${API_BASE_URL}/monhoc`);
    return await response.json();
};

export const addMonHoc = async (monHoc) => {
    const response = await fetch(`${API_BASE_URL}/monhoc`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(monHoc)
    });
    return await response.json();
};

export const updateMonHoc = async (id, monHoc) => {
    const response = await fetch(`${API_BASE_URL}/monhoc/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(monHoc)
    });
    return await response.json();
};

export const deleteMonHoc = async (id) => {
    await fetch(`${API_BASE_URL}/monhoc/${id}`, {
        method: 'DELETE'
    });
};
