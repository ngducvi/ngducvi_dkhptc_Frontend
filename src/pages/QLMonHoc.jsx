import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Menu from '../components/menu';
import { getAllMonHoc, addMonHoc, updateMonHoc, deleteMonHoc } from '../services/monHocService';

export default function QLMonHoc() {
  const [dataMonHoc, setDataMonHoc] = useState([]);
  const [maMonHoc, setMaMonHoc] = useState('');
  const [tenMonHoc, setTenMonHoc] = useState('');
  const [maChuyenNganh, setMaChuyenNganh] = useState('');
  const [error, setError] = useState('');
  const [editingMonHoc, setEditingMonHoc] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllMonHoc();
    setDataMonHoc(data);
  };

  const handleAddMonHoc = async (event) => {
    event.preventDefault();
    const newMonHoc = { maMonHoc, tenMonHoc, chuyenNganh:{maChuyenNganh} }; // Thêm mã chuyên ngành
    await addMonHoc(newMonHoc);
    fetchData();
    setMaMonHoc('');
    setTenMonHoc('');
    setMaChuyenNganh('');
  };

  const handleDeleteMonHoc = async (id) => {
    try {
      await deleteMonHoc(id);
      fetchData();
    } catch (error) {
      setError("Không thể xóa môn học.");
    }
  };

  const handleUpdateMonHoc = async () => {
    const updatedMonHoc = { maMonHoc: editingMonHoc.maMonHoc, tenMonHoc, chuyenNganh:{maChuyenNganh} }; // Thêm mã chuyên ngành
    await updateMonHoc(editingMonHoc.maMonHoc, updatedMonHoc);
    fetchData();
    setEditingMonHoc(null);
    setMaMonHoc('');
    setTenMonHoc('');
    setMaChuyenNganh('');
  };

  const handleEditClick = (monHoc) => {
    setEditingMonHoc(monHoc);
    setMaMonHoc(monHoc.maMonHoc);
    setTenMonHoc(monHoc.tenMonHoc);
    setMaChuyenNganh(monHoc.maChuyenNganh); // Set mã chuyên ngành
  };

  const handleCancelEdit = () => {
    setEditingMonHoc(null);
    setMaMonHoc('');
    setTenMonHoc('');
    setMaChuyenNganh('');
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
              <h3>QUẢN LÝ MÔN HỌC</h3>
              <div className="form-addchuyennganh">
                <form onSubmit={editingMonHoc ? handleUpdateMonHoc : handleAddMonHoc}>
                  <div className="form-group">
                    <label htmlFor="maMonHoc">Mã môn học</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maMonHoc"
                      value={maMonHoc}
                      onChange={(e) => setMaMonHoc(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tenMonHoc">Tên môn học</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenMonHoc"
                      value={tenMonHoc}
                      onChange={(e) => setTenMonHoc(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maChuyenNganh">Mã chuyên ngành</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maChuyenNganh"
                      value={maChuyenNganh}
                      onChange={(e) => setMaChuyenNganh(e.target.value)}
                    />
                  </div>
                  <div>
                    {editingMonHoc ? (
                      <div>
                        <button type="submit" className="btn btn-primary">
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
              <div className="box-monhoc">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã môn học</th>
                      <th>Tên môn học</th>
                      <th>Mã chuyên ngành</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataMonHoc.map((item, index) => (
                      <tr key={item.maMonHoc}>
                        <td>{item.maMonHoc}</td>
                        <td>{item.tenMonHoc}</td>
                        <td>{item.chuyenNganh ? item.chuyenNganh.maChuyenNganh : ""}</td>
                        <td>
                          <Button variant="primary" onClick={() => handleEditClick(item)}>Sửa</Button>
                          <Button variant="danger" onClick={() => handleDeleteMonHoc(item.maMonHoc)}>Xóa</Button>
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
