import API_BASE_URL from '../configs/apiConfig';

export const getAllLopHocPhan = async () => {
    const response = await fetch(`${API_BASE_URL}/lophocphan`);
    return await response.json();
};

export const addLopHocPhan = async (lopHocPhan) => {
    const response = await fetch(`${API_BASE_URL}/lophocphan`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lopHocPhan)
    });
    return await response.json();
};

export const updateLopHocPhan = async (maLopHocPhan, lopHocPhan) => {
    const response = await fetch(`${API_BASE_URL}/lophocphan/${maLopHocPhan}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(lopHocPhan)
    });
    return await response.json();
};

export const deleteLopHocPhan = async (maLopHocPhan) => {
    await fetch(`${API_BASE_URL}/lophocphan/${maLopHocPhan}`, {
        method: 'DELETE'
    });
};
