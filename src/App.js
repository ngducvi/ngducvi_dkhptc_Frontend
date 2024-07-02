import './App.css';
import Login from './components/Login';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeSV from './pages/HomeSV';
import HomeGV from './pages/HomeGV';
import HomeNV from './pages/HomeNV';
import DanhSachSV from './pages/DanhSachSV';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChuongTrinhKhung from './pages/ChuongTrinhKhung';
import DangKyHocPhan from './pages/DangKyHocPhan';
import MoLopHocPhan from './pages/MoLopHocPhan';
import NhapDiem from './pages/NhapDiem';
import ThanhToanHocPhi from './pages/ThanhToanHocPhi';
import ThoiKhoaBieu from './pages/ThoiKhoaBieu';
import XemDiem from './pages/XemDiem';
import CongNo from './pages/XemCongNo';
import Profile from './pages/Profile';
import DanhSachGV from './pages/QLGV';
import QLSV from './pages/QLSV';
import QLKHOA from './pages/QLKHOA';
import QLMH from './pages/QLMonHoc';
import QLHP from './pages/QLHocPhan';
import QLChuyenNganh from './pages/QLChuyenNganh';
import Menu from './components/menu'
import Menusv from './components/menusv'
import TimSinhVien from './pages/TimSinhVien';
import LoginNV from "./components/LoginNV";
import ControlLogin from "./pages/ControlLogin";

function App() {
  return (
    <div className='app-f'>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ControlLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loginnv' element={<LoginNV />} />
          <Route path='/home' element={<HomeSV />} />
          <Route path='/dssv' element={<DanhSachSV />} />
          <Route path='/chuongtrinhkhung' element={<ChuongTrinhKhung />} />
          <Route path='/dangkyhocphan' element={<DangKyHocPhan />} />
          <Route path='/molophocphan' element={<MoLopHocPhan />} />
          <Route path='/nhapdiem' element={<NhapDiem />} />
          <Route path='/thanhtoanhocphi' element={<ThanhToanHocPhi />} />
          <Route path='/thoikhoabieu' element={<ThoiKhoaBieu />} />
          <Route path='/xemdiem' element={<XemDiem />} />
          <Route path='/congno' element={<CongNo />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dsgv' element={<DanhSachGV />} />
          <Route path='/qlsv' element={<QLSV />} />
          <Route path='/qlkhoa' element={<QLKHOA />} />
          <Route path='/qlmonhoc' element={<QLMH />} />
          <Route path='/qlhocphan' element={<QLHP />} />
          <Route path='/qlchuyennganh' element={<QLChuyenNganh />} />
          <Route path='/homegv' element={<HomeGV />} />
          <Route path='/homenv' element={<HomeNV />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/menusv' element={<Menusv />} />
          <Route path='/timsinhvien' element={<TimSinhVien />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
