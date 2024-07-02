// src/services/chuyenNganhService.js
import API_BASE_URL from '../configs/apiConfig';

export const getAllChuyenNganh = async () => {
    const response = await fetch(`${API_BASE_URL}/chuyennganh`);
    return await response.json();
};

export const addChuyenNganh = async (chuyenNganh) => {
    
    const response = await fetch(`${API_BASE_URL}/chuyennganh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chuyenNganh)
    });
    return await response.json();
};

export const updateChuyenNganh = async (id, chuyenNganh) => {
    const response = await fetch(`${API_BASE_URL}/chuyennganh/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chuyenNganh)
    });
    return await response.json();
};

export const deleteChuyenNganh = async (id) => {
    await fetch(`${API_BASE_URL}/chuyennganh/${id}`, {
        method: 'DELETE'
    });
};
