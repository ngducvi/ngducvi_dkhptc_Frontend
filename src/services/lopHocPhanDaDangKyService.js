import axios from 'axios';

const API_BASE_URL = 'http://localhost:8030/api/lophocphandadangky';


// Hàm để đăng ký lớp học phần
const dangKyLopHocPhan = async (lopHocPhanDaDangKy) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/dang-ky`, lopHocPhanDaDangKy);
    return response.data;
  } catch (error) {
    console.error('Có lỗi xảy ra khi đăng ký lớp học phần:', error);
    throw error;
  }
};

// Hàm để lấy tất cả các học phần đã đăng ký
const getAllLopHocPhanDaDangKy = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Có lỗi xảy ra khi lấy danh sách học phần đã đăng ký:', error);
    throw error;
  }
};

// Hàm để lấy danh sách lớp học phần đã đăng ký của sinh viên theo mã sinh viên
const getDanhSachLopHocPhanDaDangKyBySinhVien = async (maSinhVien) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sinh-vien/${maSinhVien}`);
    return response.data;
  } catch (error) {
    console.error('Có lỗi xảy ra khi lấy danh sách lớp học phần của sinh viên:', error);
    throw error;
  }
};

// Hàm để lấy danh sách sinh viên đã đăng ký theo mã lớp học phần
const getSinhVienByLopHocPhan = async (maLopHocPhan) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lop-hoc-phan/${maLopHocPhan}`);
    return response.data;
  } catch (error) {
    console.error('Có lỗi xảy ra khi lấy danh sách sinh viên theo mã lớp học phần:', error);
    throw error;
  }
};

// Hàm để xóa môn học theo mã đăng ký
const deleteMonHoc = async (maDangKy) => {
  try {
    await axios.delete(`${API_BASE_URL}/${maDangKy}`);
  } catch (error) {
    console.error('Có lỗi xảy ra khi xóa môn học:', error);
    throw error;
  }
};

export {
  dangKyLopHocPhan,
  getAllLopHocPhanDaDangKy,
  getDanhSachLopHocPhanDaDangKyBySinhVien,
  getSinhVienByLopHocPhan,
  deleteMonHoc
};

