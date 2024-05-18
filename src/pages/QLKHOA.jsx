
import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Menu from '../components/menu'
import { getAllKhoa, addKhoa, updateKhoa, deleteKhoa } from '../services/khoaService';

export default function QLKHOA() {
  const [datakhoa, setDataKhoa] = useState([]);
  const [maKhoa, setMaKhoa] = useState('');
  const [tenKhoa, setTenKhoa] = useState('');
  const [error, setError] = useState('');
  const [editingKhoa, setEditingKhoa] = useState(null); // State để lưu thông tin khoa đang được chỉnh sửa

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllKhoa();
    setDataKhoa(data);
  };

  const handleAddKhoa = async (event) => {
    event.preventDefault();
    const newKhoa = { maKhoa, tenKhoa };
    await addKhoa(newKhoa);
    fetchData();
    setMaKhoa('');
    setTenKhoa('');
  };

  const handleDeleteKhoa = async (id) => {
    try {
      await deleteKhoa(id);
      fetchData();
    } catch (error) {
      setError("Mã khoa đã được sử dụng và không thể xóa.");
    }
  };
  const handleUpdateKhoa = async () => {
    const updatedKhoa = { maKhoa: editingKhoa.maKhoa, tenKhoa }; // Cập nhật mã khoa và dữ liệu mới của khoa
    await updateKhoa(editingKhoa.maKhoa, updatedKhoa); // Truyền id của khoa và dữ liệu mới vào hàm updateKhoa
    fetchData();
    setEditingKhoa(null);
    setMaKhoa('');
    setTenKhoa('');
  };
  

  const handleEditClick = (khoa) => {
    setEditingKhoa(khoa);
    setMaKhoa(khoa.maKhoa); // Cập nhật giá trị của input mã khoa với mã khoa của khoa được chọn
    setTenKhoa(khoa.tenKhoa); // Cập nhật giá trị của input tên khoa với tên khoa của khoa được chọn
  };
  

  const handleCancelEdit = () => {
    setEditingKhoa(null); // Hủy chỉnh sửa, reset state editingKhoa về null
    setMaKhoa(''); // Xóa dữ liệu trong input
    setTenKhoa('');
  };

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div className="title-qlcn">
              <h3>QUẢN LÝ KHOA</h3>
              <div className="form-addchuyennganh">
                <form onSubmit={editingKhoa ? handleUpdateKhoa : handleAddKhoa}>
                  <div className="form-group">
                    <label htmlFor="maKhoa">Mã khoa</label>
                    <input
  type="text"
  className="form-control"
  id="maKhoa"
  value={maKhoa} // Giá trị mã khoa được gán từ state maKhoa
  onChange={(e) => setMaKhoa(e.target.value)} // Khi giá trị thay đổi, hàm setMaKhoa được gọi để cập nhật giá trị trong state
/>

                  </div>
                  <div className="form-group">
                    <label htmlFor="tenKhoa">Tên khoa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenKhoa"
                      value={tenKhoa}
                      onChange={(e) => setTenKhoa(e.target.value)}
                    />
                  </div>
                  <div>
                    {editingKhoa ? (
                      <div>
                        <button type="submit" className="btn btn-primary" >
                          Lưu
                        </button>
                        <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                          Hủy
                        </button>
                      </div>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Thêm
                      </button>
                    )}
                  </div>
                </form>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã khoa</th>
                      <th>Tên khoa</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datakhoa.map((item, index) => (
                      <tr key={index}>
                        <td>{item.maKhoa}</td>
                        <td>{item.tenKhoa}</td>
                        <td>
                          <Button variant="primary" onClick={() => handleEditClick(item)}>Sửa</Button>
                          <Button variant="danger" onClick={() => handleDeleteKhoa(item.maKhoa)}>Xóa</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}