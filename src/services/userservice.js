import API_BASE_URL from '../configs/apiConfig';

export const getNhanVienByMaNhanVien = async (maNhanVien) => {
    const response = await fetch(`${API_BASE_URL}/v1/nhanvien/${maNhanVien}`);
    return await response.json();
}