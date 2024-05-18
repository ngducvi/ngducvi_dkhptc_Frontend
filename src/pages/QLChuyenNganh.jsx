import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import Menu from "../components/menu";
import {
  getAllChuyenNganh,
  addChuyenNganh,
  updateChuyenNganh,
  deleteChuyenNganh,
} from "../services/chuyennganhService";
import { getAllKhoa } from "../services/khoaService";

export default function QLChuyenNganh() {
  const [dataChuyenNganh, setDataChuyenNganh] = useState([]);
  const [maChuyenNganh, setMaChuyenNganh] = useState("");
  const [tenChuyenNganh, setTenChuyenNganh] = useState("");
  const [dataKhoa, setDataKhoa] = useState([]);
  const [maKhoa, setMaKhoa] = useState("");
  const [error, setError] = useState("");
  const [editingChuyenNganh, seteditingChuyenNganh] = useState(null); // State để lưu thông tin khoa đang được chỉnh sửa
  const fetchData = async () => {
    const data = await getAllChuyenNganh();
    setDataChuyenNganh(data);
  };
  const fetchDataKhoa = async () => {
    const data = await getAllKhoa();
    setDataKhoa(data);
  };
  useEffect(() => {
    fetchData();
    fetchDataKhoa();
  }, []);

  const handleAddChuyenNganh = async (event) => {
    event.preventDefault();
    const newChuyenNganh = {
      maChuyenNganh,
      tenChuyenNganh,
      khoa: { maKhoa }, // Gán mã khoa vào thuộc tính khoa.maKhoa
    };
    await addChuyenNganh(newChuyenNganh);
    fetchData();
    setMaChuyenNganh("");
    setTenChuyenNganh("");
    setMaKhoa("");
  };

  const handleDeleteChuyenNganh = async (id) => {
    try {
      await deleteChuyenNganh(id);
      fetchData();
    } catch (error) {
      setError("Không thể xóa chuyên ngành.");
    }
  };

  const handleEditClick = (chuyennganh) => {
    seteditingChuyenNganh(chuyennganh);
    setMaChuyenNganh(chuyennganh.maChuyenNganh); // Cập nhật giá trị của input mã khoa với mã khoa của khoa được chọn
    setTenChuyenNganh(chuyennganh.tenChuyenNganh); // Cập nhật giá trị của input tên khoa với tên khoa của khoa được chọn
    setMaKhoa(chuyennganh.khoa ? chuyennganh.khoa.maKhoa : "");
  };
  const handleUpdateChuyenNganh = async () => {
    const updatedChuyenNganh = {
      maChuyenNganh,
      tenChuyenNganh,
      khoa: { maKhoa },
    };
    await updateChuyenNganh(maChuyenNganh, updatedChuyenNganh);
    fetchData();
    setMaChuyenNganh("");
    setTenChuyenNganh("");
    setMaKhoa("");
    seteditingChuyenNganh(null);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log("Giá trị mã khoa từ input:", value); // Kiểm tra giá trị từ input
    setMaKhoa(value);
  };

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-qlcn">
            <div className="title-qlchuyennganh">
              <h3>QUẢN LÝ CHUYÊN NGÀNH</h3>
              <div className="form-addchuyennganh">
                <div className="row">
                  <div className="col-md-2">
                    <label htmlFor="">Tìm kiếm theo Khoa</label>
                  </div>
                  <div className="col-md-10">
                    {/* lấy từ getAllKhoa */}
                    <select className="form-control">
                      <option value="">Chọn khoa</option>
                      {dataKhoa.map((khoa) => (
                        <option key={khoa.maKhoa} value={khoa.maKhoa}>
                          {khoa.maKhoa}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <form onSubmit={handleAddChuyenNganh}>
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
                  <div className="form-group">
                    <label htmlFor="tenChuyenNganh">Tên chuyên ngành</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenChuyenNganh"
                      value={tenChuyenNganh}
                      onChange={(e) => setTenChuyenNganh(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maKhoa">Mã khoa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maKhoa"
                      value={maKhoa}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="button-group">
                    {/* Thêm , Lưu và hủy ẩn Thêm khi Sưa*/}
                    {!editingChuyenNganh ? (
                      <Button variant="primary" type="submit">
                        Thêm
                      </Button>
                    ) : null}
                    {editingChuyenNganh ? (
                      <div>
                        <Button
                          variant="primary"
                          onClick={handleUpdateChuyenNganh}
                        >
                          Lưu
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => seteditingChuyenNganh(null)}
                        >
                          Hủy
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã chuyên ngành</th>
                      <th>Tên chuyên ngành</th>
                      <th>Mã Khoa</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataChuyenNganh.map((chuyenNganh, index) => (
                      <tr key={chuyenNganh.maChuyenNganh}>
                        <td>{index + 1}</td>
                        <td>{chuyenNganh.maChuyenNganh}</td>
                        <td>{chuyenNganh.tenChuyenNganh}</td>
                        <td>
                          {chuyenNganh.khoa ? chuyenNganh.khoa.maKhoa : ""}
                        </td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => handleEditClick(chuyenNganh)}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() =>
                              handleDeleteChuyenNganh(chuyenNganh.maChuyenNganh)
                            }
                          >
                            Xóa
                          </Button>
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
