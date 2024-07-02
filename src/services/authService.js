

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'; // Thay đổi URL nếu cần

export const loginSinhVien = async (loginSVDTO) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sinhvien/login`, loginSVDTO);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Xử lý lỗi nếu cần
    }
};
export const loginNhanVien = async (loginDTO) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/nhanvien/login`, loginDTO);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Xử lý lỗi nếu cần
    }
};

