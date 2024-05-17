import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/menu'

export default function QLHocPhan() {
  const datahocphan = [
    {
      maHocPhan: "HP1",
      tenHocPhan: "Học phần 1",
      soTinChi: "3",
      maHocPhanTienQuyet: "",
      maHocKi: "1",
      maMonHoc: "1",
      maChuyenNganh: "1",
    },
    {
      maHocPhan: "HP2",
      tenHocPhan: "Học phần 2",
      soTinChi: "3",
      maHocPhanTienQuyet: "HP1",
      maHocKi: "1",
      maMonHoc: "2",
      maChuyenNganh: "2",
    },
  ];
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
              <div className="form-dk">
                <div className="formgroup">
                  <label htmlFor="">Mã học phần</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <label htmlFor="">Tên Học phần</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <label htmlFor="">Số tín chỉ</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <label htmlFor="">Mã học phần tiên quyết</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <button type="submit" className="btn btn-primary">
                    Tìm kiếm
                  </button>
                </div>
              </div>

              <div className="form-addchuyennganh">
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="">Mã học phần: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã Học phần"
                        id="maHocPhan"
                        name="maHocPhan"
                        disabled
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Tên học phần: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên học phần"
                        id="tenHocPhan"
                        name="tenHocPhan"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Số tín chỉ: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số tín chỉ"
                        id="soTinChi"
                        name="soTinChi"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã học phần tiên quyết: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã học phần tiên quyết"
                        id="maHocPhanTienQuyet"
                        name="maHocPhanTienQuyet"
                      />
                    </div>
                    {/* Mã Học kì */}
                    <div className="col-md-3">
                      <label htmlFor="">Mã Học kì: </label>
                      <select
                        className="form-control"
                        id="maHocKi"
                        name="maHocKi"
                      >
                        <option value="1">Học kì 1 2020 -2021 </option>
                        <option value="2">Học kì 2 2020 -2021 </option>
                      </select>
                    </div>
                    {/* Mã Môn học */}
                    <div className="col-md-3">
                      <label htmlFor="">Mã Môn học: </label>
                      <select
                        className="form-control"
                        id="maMonHoc"
                        name="maMonHoc"
                      >
                        <option value="1">Môn học 1</option>
                        <option value="2">Môn học 2</option>
                      </select>
                    </div>
                    {/* Mã Chuyên ngành */}
                    <div className="col-md-3">
                      <label htmlFor="">Mã Chuyên ngành: </label>
                      <select
                        className="form-control"
                        id="maChuyenNganh"
                        name="maChuyenNganh"
                      >
                        <option value="1">Chuyên ngành 1</option>
                        <option value="2">Chuyên ngành 2</option>
                      </select>
                    </div>
                  </div>
                  {/* Button lưu hủy*/}
                  <div className="button-qlsv">
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                    <button type="submit" className="btn btn-danger">
                      Hủy
                    </button>
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
                    {datahocphan.map((hocphan) => (
                      <tr key={hocphan.maHocPhan}>
                        <td>{hocphan.maHocPhan}</td>
                        <td>{hocphan.tenHocPhan}</td>
                        <td>{hocphan.soTinChi}</td>
                        <td>{hocphan.maHocPhanTienQuyet}</td>
                        <td>{hocphan.maHocKi}</td>
                        <td>{hocphan.maMonHoc}</td>
                        <td>{hocphan.maChuyenNganh}</td>
                        <td>
                          <Button variant="info">Sửa</Button>
                          <Button variant="danger">Xóa</Button>
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
