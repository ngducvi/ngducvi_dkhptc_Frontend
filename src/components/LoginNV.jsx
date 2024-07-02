import React, { useState } from 'react';
import '../assets/styles/content.css';
import { useNavigate } from 'react-router-dom';

function Components() {
    const navigate = useNavigate();
    const [maDangNhap, setMaDangNhap] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8030/api/v1/nhanvien/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    maNhanVien: maDangNhap,
                    passwordnv: matKhau
                })
            });
            const data = await response.json();
            if (data.success) {
                // Đăng nhập thành công, chuyển hướng đến trang thông tin sinh viên
                navigate('/home');
            } else {
                setError(data.message);
                if(error === "Login Success"){
                    localStorage.setItem('maNhanVien', maDangNhap);
                    navigate('/homenv');
                }else{
                    setError(data.message);
                }
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

    return (
        <div className='content-login'>
            <div className='container-login'>
                <div className='box-login'>
                    <p>Đăng nhập</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputBox'>
                            <input type='text' name='maDangNhap' value={maDangNhap} onChange={(e) => setMaDangNhap(e.target.value)} required />
                            <label>Mã đăng nhập</label>
                        </div>
                        <div className='inputBox'>
                            <input type='password' name='matKhau' value={matKhau} onChange={(e) => setMatKhau(e.target.value)} required />
                            <label>Mật khẩu</label>
                        </div>
                        {error && <p className='error-message'>{error}</p>}
                        <input type='submit' value='Đăng nhập' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Components;
