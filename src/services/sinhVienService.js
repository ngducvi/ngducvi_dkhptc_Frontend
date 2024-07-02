import API_BASE_URL from '../configs/apiConfig';

export const getAllSinhVien = async () => {
    const response = await fetch(`${API_BASE_URL}/v1/sinhvien`);
    return await response.json();
};

export const addSinhVien = async (sinhVien) => {
    const response = await fetch(`${API_BASE_URL}/v1/sinhvien`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sinhVien)
    });
    return await response.json();
};

export const updateSinhVien = async (maSinhVien, sinhVien) => {
    const response = await fetch(`${API_BASE_URL}/v1/sinhvien/${maSinhVien}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sinhVien)
    });
    return await response.json();
};

export const deleteSinhVien = async (maSinhVien) => {
    await fetch(`${API_BASE_URL}/v1/sinhvien/${maSinhVien}`, {
        method: 'DELETE'
    });
};
export const getSinhVienByMaSinhVien = async (maSinhVien) => {
    const response = await fetch(`${API_BASE_URL}/v1/sinhvien/${maSinhVien}`);
    return await response.json();
};