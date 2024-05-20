import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Menu from "../components/menu";
import {
  getAllSinhVien,
  addSinhVien,
  updateSinhVien,
  deleteSinhVien,
} from "../services/sinhVienService";
import { getAllKhoa } from "./../services/khoaService";
export default function QLSV() {
  const [sinhVienList, setSinhVienList] = useState([]);
  const [khoaList, setKhoaList] = useState([]);
  const [newSinhVien, setNewSinhVien] = useState({
    maSinhVien: "",
    tenSinhVien: "",
    gmail: "",
    hoKhauThuongTru: "",
    maKhuVuc: "",
    soCCCD: "",
    soDienThoai: "",
    ngaySinh: "",
    diaChi: "",
    gioiTinh: "",
    bacDaoTao: "",
    lopHoc: "",
    loaiHinhDaoTao: "",
    maChuyenNganh: "",
    maKhoa: "",
    maTrangThai: "",
    maTonGiao: "",
    maDanToc: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllSinhVien();
    const datakhoa = await getAllKhoa();
    setSinhVienList(data);
    setKhoaList(datakhoa);
  };

  const handleAddSinhVien = async () => {
    await addSinhVien(newSinhVien);
    fetchData();
  };

  const handleUpdateSinhVien = async (maSinhVien, updatedSinhVien) => {
    await updateSinhVien(maSinhVien, updatedSinhVien);
    fetchData();
  };

  const handleDeleteSinhVien = async (maSinhVien) => {
    await deleteSinhVien(maSinhVien);
    fetchData();
  };

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu></Menu>
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div className="title-qlsv">
              <h3>QUẢN LÝ SINH VIEN</h3>
              <div className="form-dk">
                <div className="formgroup">
                  <label htmlFor="">Mã Sinh viên</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <label htmlFor="">Tên sinh viên</label>
                  <input type="text" />
                </div>
                {/* Theo lớp */}
                <div className="formgroup">
                  <label htmlFor="">Mã Lớp</label>
                  <select name="" id=""></select>
                </div>
                <div className="formgroup">
                  <label htmlFor="">Mã Chuyên ngành</label>
                  <select name="" id=""></select>
                </div>
                <div className="formgroup">
                  <label htmlFor="">Mã Khoa</label>
                  <select name="" id="">
                 
                  </select>
                </div>
              </div>
              <div className="form-addchuyennganh">
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="col-md-12">
                        <label htmlFor="">Mã sinh viên: </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mã sinh viên"
                          id="maSinhVien"
                          name="maSinhVien"
                          // không cho nhập
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Tên sinh viên: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã sinh viên"
                        id="tenSinhVien"
                        name="tenSinhVien"
                      />
                    </div>
                    {/* Gmail	Hộ khẩu thường trú	Mã khu vực	Số CCCD	Số điện thoại	Ngày sinh	Địa chỉ	Giới tính	Bậc đào tạo	Lớp học	Loại hình đào tạo	Mã chuyên ngành	Mã khoa	Mã trạng thái	Mã tôn giáo	Mã dân tộc */}
                    <div className="col-md-3">
                      <label htmlFor="">Gmail: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gmail"
                        id="gmail"
                        name="gmail"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Hộ khẩu thường trú: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Hộ khẩu thường trú"
                        id="hoKhauThuongTru"
                        name="hoKhauThuongTru"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã khu vực: </label>
                      <select
                        className="form-select"
                        id="maKhuVuc"
                        name="maKhuVuc"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Số CCCD: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số CCCD"
                        id="soCCCD"
                        name="soCCCD"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Số điện thoại: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số điện thoại"
                        id="soDienThoai"
                        name="soDienThoai"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Ngày sinh: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ngày sinh"
                        id="ngaySinh"
                        name="ngaySinh"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Địa chỉ: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Địa chỉ"
                        id="diaChi"
                        name="diaChi"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Giới tính: </label>
                      <select
                        className="form-select"
                        id="gioiTinh"
                        name="gioiTinh"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Bậc đào tạo: </label>
                      <select
                        className="form-select"
                        id="bacDaoTao"
                        name="bacDaoTao"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Lớp học: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lớp học"
                        id="lopHoc"
                        name="lopHoc"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Loại hình đào tạo: </label>
                      <select
                        className="form-select"
                        id="loaiHinhDaoTao"
                        name="loaiHinhDaoTao"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Chuyên ngành: </label>
                      <select
                        className="form-select"
                        id="maChuyenNganh"
                        name="maChuyenNganh"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Khoa: </label>
                      <select
                        className="form-select"
                        id="maKhoa"
                        name="maKhoa"
                      >
                        {khoaList.map((khoa) => (
                          <option key={khoa.maKhoa} value={khoa.maKhoa}>
                            {khoa.maKhoa}
                          </option>
                        ))}
                        
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Trạng thái: </label>
                      <select
                        className="form-select"
                        id="maTrangThai"
                        name="maTrangThai"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Tôn giáo: </label>
                      <select
                        className="form-select"
                        id="maTonGiao"
                        name="maTonGiao"
                      ></select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Dân tộc: </label>
                      <select
                        className="form-select"
                        id="maDanToc"
                        name="maDanToc"
                      ></select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <Button variant="primary">Thêm</Button>
                    <Button variant="success">Lưu</Button>
                    <Button variant="danger">Hủy</Button>
                  </div>
                </form>
              </div>
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã sinh viên</th>
                      <th>Họ tên</th>
                      <th>Gmail</th>
                      <th>Hộ khẩu thường trú</th>
                      <th>Mã khu vực</th>
                      <th>Số CCCD</th>
                      <th>Số điện thoại</th>
                      <th>Ngày sinh</th>
                      <th>Địa chỉ</th>
                      <th>Giới tính</th>
                      <th>Bậc đào tạo</th>
                      <th>Lớp học</th>
                      <th>Loại hình đào tạo</th>
                      <th>Mã chuyên ngành</th>
                      <th>Mã khoa</th>
                      <th>Mã trạng thái</th>
                      <th>Mã tôn giáo</th>
                      <th>Mã dân tộc</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sinhVienList.map((sinhVien) => (
                      <tr key={sinhVien.maSinhVien}>
                        <td>{sinhVien.maSinhVien}</td>
                        <td>{sinhVien.hoTen}</td>
                        <td>{sinhVien.gmail}</td>
                        <td>{sinhVien.hoKhauThuongTru}</td>
                        <td>{sinhVien.maKhuVuc}</td>
                        <td>{sinhVien.soCCCD}</td>
                        <td>{sinhVien.soDienThoai}</td>
                        <td>{sinhVien.ngaySinh}</td>
                        <td>{sinhVien.diaChi}</td>
                        <td>{sinhVien.gioiTinh}</td>
                        <td>{sinhVien.bacDaoTao}</td>
                        <td>{sinhVien.lopHoc}</td>
                        <td>{sinhVien.loaiHinhDaoTao}</td>
                        <td>{sinhVien.chuyenNganh.maChuyenNganh}</td>
                        <td>{sinhVien.chuyenNganh.khoa.maKhoa}</td>
                        <td>{sinhVien.trangThaiHocTap.maTrangThai}</td>
                        <td>{sinhVien.tonGiao.maTonGiao}</td>
                        <td>{sinhVien.danToc.maDanToc}</td>
                        <td>
                          <Button
                            onClick={() =>
                              handleUpdateSinhVien(
                                sinhVien.maSinhVien,
                                sinhVien
                              )
                            }
                          >
                            Lưu
                          </Button>
                          {/* Button để sửa sinh viên */}
                          <Button>Sửa</Button>
                          {/* Button để xóa sinh viên */}
                          <Button
                            onClick={() =>
                              handleDeleteSinhVien(sinhVien.maSinhVien)
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
