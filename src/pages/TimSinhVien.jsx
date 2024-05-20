import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSinhVienByMaSinhVien } from '../services/sinhVienService';

export default function TimSinhVien() {
    const [maSinhVien, setMaSinhVien] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        const sinhVien = await getSinhVienByMaSinhVien(maSinhVien);
        if (sinhVien) {
            localStorage.setItem('sinhVien', JSON.stringify(sinhVien));
            navigate('/home');
        } else {
            alert('Không tìm thấy sinh viên');
        }
    };

    return (
        <div>
            <h1>Tìm sinh viên</h1>
            <div className='form-group'>
                <label htmlFor="masv" className='col-sm-6'>
                    Mã sinh viên:
                    <input
                        type="text"
                        className="form-control"
                        id="masv"
                        name="masv"
                        value={maSinhVien}
                        onChange={(e) => setMaSinhVien(e.target.value)}
                    />
                </label>
                <button onClick={handleSearch}>
                    Tìm kiếm
                </button>
            </div>
        </div>
    );
}
