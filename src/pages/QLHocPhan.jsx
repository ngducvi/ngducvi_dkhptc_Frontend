import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import Menu from "../components/menu";
import {
  getAllHocPhan,
  addHocPhan,
  updateHocPhan,
  deleteHocPhan,
} from "../services/hocPhanService";

export default function QLHocPhan() {
  const [dataHocPhan, setDataHocPhan] = useState([]);
  const [maHocPhan, setMaHocPhan] = useState("");
  const [tenHocPhan, setTenHocPhan] = useState("");
  const [soTinChi, setSoTinChi] = useState("");
  const [maHocPhanTienQuyet, setMaHocPhanTienQuyet] = useState("");
  const [maHocKi, setMaHocKi] = useState("");
  const [maMonHoc, setMaMonHoc] = useState("");
  const [maChuyenNganh, setMaChuyenNganh] = useState("");
  const [editingHocPhan, setEditingHocPhan] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllHocPhan();
      setDataHocPhan(data);
    } catch (error) {
      setError("Lỗi khi lấy dữ liệu học phần.");
    }
  };

  const handleAddHocPhan = async (event) => {
    event.preventDefault();
    const newHocPhan = {
      maHocPhan,
      tenHocPhan,
      soTinChi,
      maHocPhanTienQuyet,
      maHocKi,
      maMonHoc,
      maChuyenNganh,
    };
    try {
      await addHocPhan(newHocPhan);
      fetchData();
      resetForm();
    } catch (error) {
      setError("Lỗi khi thêm học phần.");
    }
  };

  const handleUpdateHocPhan = async (event) => {
    event.preventDefault();
    const updatedHocPhan = {
      maHocPhan: editingHocPhan.maHocPhan,
      tenHocPhan,
      soTinChi,
      maHocPhanTienQuyet,
      maHocKi,
      maMonHoc,
      maChuyenNganh,
    };
    try {
      await updateHocPhan(editingHocPhan.maHocPhan, updatedHocPhan);
      fetchData();
      resetForm();
      setEditingHocPhan(null);
    } catch (error) {
      setError("Lỗi khi cập nhật học phần.");
    }
  };

  const handleDeleteHocPhan = async (maHocPhan) => {
    try {
      await deleteHocPhan(maHocPhan);
      fetchData();
    } catch (error) {
      setError("Lỗi khi xóa học phần.");
    }
  };

  const handleEditClick = (hocPhan) => {
    setEditingHocPhan(hocPhan);
    setMaHocPhan(hocPhan.maHocPhan);
    setTenHocPhan(hocPhan.tenHocPhan);
    setSoTinChi(hocPhan.soTinChi);
    setMaHocPhanTienQuyet(hocPhan.maHocPhanTienQuyet);
    setMaHocKi(hocPhan.maHocKi);
    setMaMonHoc(hocPhan.maMonHoc);
    setMaChuyenNganh(hocPhan.maChuyenNganh);
  };

  const resetForm = () => {
    setMaHocPhan("");
    setTenHocPhan("");
    setSoTinChi("");
    setMaHocPhanTienQuyet("");
    setMaHocKi("");
    setMaMonHoc("");
    setMaChuyenNganh("");
    setError("");
  };

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu></Menu>
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div>
              <h3>QUẢN LÝ HỌC PHẦN</h3>
              <div className="row">
                <p>Tìm kiếm</p>
                <div className="form-group col-md-3 col-xs-6">
                  <label htmlFor="maHocPhan">Mã học phần</label>
                  <input type="text" className="form-control" id="maHocPhan" />
                </div>
                <div className="form-group col-md-3 col-xs-6">
                  <label htmlFor="tenHocPhan">Tên Học phần</label>
                  <input type="text" className="form-control" id="tenHocPhan" />
                </div>
                <div className="form-group col-md-3 col-xs-6">
                  <label htmlFor="soTinChi">Số tín chỉ</label>
                  <input type="text" className="form-control" id="soTinChi" />
                </div>
                <div className="form-group col-md-3 col-xs-6">
                  <label htmlFor="maHocPhanTienQuyet">
                    Mã học phần tiên quyết
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="maHocPhanTienQuyet"
                  />
                </div>
                <div className="form-group col-md-12">
                  <button type="submit" className="btn btn-primary">
                    Tìm kiếm
                  </button>
                </div>
              </div>

              <div className="form-addchuyennganh">
                <form
                  onSubmit={
                    editingHocPhan ? handleUpdateHocPhan : handleAddHocPhan
                  }
                >
                  <div className="row">
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Mã học phần: </label>
                      <input
                        type="text"
                        id="maHocPhan"
                        value={maHocPhan}
                        onChange={(e) => setMaHocPhan(e.target.value)}
                        disabled={!!editingHocPhan}
                      />
                    </div>
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Tên học phần: </label>
                      <input
                        type="text"
                        id="tenHocPhan"
                        value={tenHocPhan}
                        onChange={(e) => setTenHocPhan(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Số tín chỉ: </label>
                      <input
                        type="text"
                        id="soTinChi"
                        value={soTinChi}
                        onChange={(e) => setSoTinChi(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Mã học phần tiên quyết: </label>
                      {/* Select All mã học phần */}
                      <select
                        id="maHocPhanTienQuyet"
                        value={maHocPhanTienQuyet}
                        onChange={(e) => setMaHocPhanTienQuyet(e.target.value)}
                      >
                        <option value="">Chọn học phần tiên quyết</option>
                        {dataHocPhan.map((hocphan) => (
                          <option
                            key={hocphan.maHocPhan}
                            value={hocphan.maHocPhan}
                          >
                            {hocphan.maHocPhan}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Mã Học kì */}
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Mã Học kì: </label>
                      <select
                        id="maHocKi"
                        value={maHocKi}
                        onChange={(e) => setMaHocKi(e.target.value)}
                      >
                        <option value="1">Học kì 1 2020 -2021 </option>
                        <option value="2">Học kì 2 2020 -2021 </option>
                      </select>
                    </div>
                    {/* Mã Môn học */}
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Mã Môn học: </label>
                      <select
                        id="maMonHoc"
                        value={maMonHoc}
                        onChange={(e) => setMaMonHoc(e.target.value)}
                      >
                        <option value="1">Môn học 1</option>
                        <option value="2">Môn học 2</option>
                      </select>
                    </div>
                    {/* Mã Chuyên ngành */}
                    <div className="col-md-3 formlabelinput">
                      <label htmlFor="">Mã Chuyên ngành: </label>
                      <select
                        id="maChuyenNganh"
                        value={maChuyenNganh}
                        onChange={(e) => setMaChuyenNganh(e.target.value)}
                      >
                        <option value="1">Chuyên ngành 1</option>
                        <option value="2">Chuyên ngành 2</option>
                      </select>
                    </div>
                  </div>
                  {/* Button lưu hủy*/}
                  <div className="button-qlsv">
                    {/* Thêm */}
                    <button type="submit" className="btn btn-primary">
                      {editingHocPhan ? "Cập nhật" : "Thêm"}
                    </button>
                    {editingHocPhan && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={resetForm}
                      >
                        Hủy
                      </button>
                    )}
                  </div>
                </form>
              </div>
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã Học Phần</th>
                      <th>Tên Học Phần</th>
                      <th>Số tín chỉ</th>
                      <th>Mã Học Phần Tiên Quyết</th>
                      <th>Mã Học Kỳ</th>
                      <th>Mã Môn Học</th>
                      <th>Mã Chuyên Ngành</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataHocPhan.map((hocphan) => (
                      <tr key={hocphan.maHocPhan}>
                        <td>{hocphan.maHocPhan}</td>
                        <td>{hocphan.tenHocPhan}</td>
                        <td>{hocphan.soTinChi}</td>
                        <td>
                          {hocphan.hocPhanTienQuyet}
                        </td>
                        <td>{hocphan.hocKy ? hocphan.hocKy.maHocKy : ""}</td>
                        <td>{hocphan.monHoc ? hocphan.monHoc.maMonHoc : ""}</td>
                        <td>
                          {hocphan.monHoc.chuyenNganh.maChuyenNganh}
                        </td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => handleEditClick(hocphan)}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() =>
                              handleDeleteHocPhan(hocphan.maHocPhan)
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
