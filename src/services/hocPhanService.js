import API_BASE_URL from '../configs/apiConfig';

export const getAllHocPhan = async () => {
    const response = await fetch(`${API_BASE_URL}/hocphan`);
    return await response.json();
};

export const getHocPhanByChuyenNganh = async (maChuyenNganh) => {
    const response = await fetch(`${API_BASE_URL}/hocphan/chuyennganh/${maChuyenNganh}`);
    return await response.json();
};

export const addHocPhan = async (hocPhan) => {
    const response = await fetch(`${API_BASE_URL}/hocphan`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hocPhan)
    });
    return await response.json();
};

export const updateHocPhan = async (maHocPhan, hocPhan) => {
    const response = await fetch(`${API_BASE_URL}/hocphan/${maHocPhan}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hocPhan)
    });
    return await response.json();
};

export const deleteHocPhan = async (maHocPhan) => {
    await fetch(`${API_BASE_URL}/hocphan/${maHocPhan}`, {
        method: 'DELETE'
    });
};
