import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/menu'
export default function QLMonHoc() {
  const datamonhoc = [
    {
      MaMonHoc: "CTT001",
      TenMonHoc: "Lập trình C",
      MaChuyenNganh: "CNTT",
    },
    {
      MaMonHoc: "CTT002",
      TenMonHoc: "Lập trình C++",
      MaChuyenNganh: "CNTT",
    },
    {
      MaMonHoc: "CTT003",
      TenMonHoc: "Quản trị",
      MaChuyenNganh: "QTKD",
    },
    {
      MaMonHoc: "CTT004",
      TenMonHoc: "Kế toán",
      MaChuyenNganh: "QTKD",
    },
   
  ];
const datachuyennganh = [
    {
      MaChuyenNganh: "CNTT",
      TenChuyenNganh: "Công nghệ thông tin",
    },
    {
      MaChuyenNganh: "QTKD",
      TenChuyenNganh: "Quản trị kinh doanh",
    },
    {
      MaChuyenNganh: "DTVT",
      TenChuyenNganh: "Điện tử viễn thông",
    },
    {
      MaChuyenNganh: "KTKT",
      TenChuyenNganh: "Kế toán",
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
            <div className="title-qlmn">
              <h3>QUẢN LÝ MÔN HỌC</h3>
              <div className="box-search">
                {/* tìm kiếm theo mã chuyên nghành select*/}
                <label htmlFor="search">Tìm kiếm theo chuyên ngành</label>
                <select name="" id="">
                  {datachuyennganh.map((chuyennghanh,index)=>(
                    <option value="" key={index}>{chuyennghanh.MaChuyenNganh}</option>
                  ))}
                </select>
              </div>
              <div className="box-form">
                <form>
                  <div className="form-group row">
                    <div className="col-md-5">
                      <label htmlFor="maMonHoc">Mã môn học</label>
                      <input
                        type="text"
                        className="form-control"
                        id="maMonHoc"
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="tenMonHoc">Tên môn học</label>
                      <input
                        type="text"
                        className="form-control"
                        id="tenMonHoc"
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="tenMonHoc">Mã chuyên nghành</label>
                      <select name="" id="">
                        {datachuyennganh.map((chuyennghanh,index)=>(
                          <option value="" key={index}>{chuyennghanh.MaChuyenNganh}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                 
                  <div className="form-group row">
                    <div className="col-md-8 offset-md-4">
                      <button type="submit" className="btn btn-primary">
                        Thêm
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Luu
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th scope="col">Mã môn học</th>
                      <th scope="col">Tên môn học</th>
                      <th scope="col">Mã chuyên ngành</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datamonhoc.map((monhoc, index) => (
                      <tr key={index}>
                        <td>{monhoc.MaMonHoc}</td>
                        <td>{monhoc.TenMonHoc}</td>
                        <td>{monhoc.MaChuyenNganh}</td>
                        <td>
                          <Button variant="primary">Sửa</Button>
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
