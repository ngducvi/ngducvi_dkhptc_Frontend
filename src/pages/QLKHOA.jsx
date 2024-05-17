
import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/menu'
export default function QLKHOA() {

  const datakhoa= [
    {
      maKhoa: "CNTT",
      tenKhoa: "Công nghệ thông tin",
    },
    {
      maKhoa: "KT",
      tenKhoa: "Kỹ thuật",
    },
    {
      maKhoa: "KT",
      tenKhoa: "Kế toán",
    },
  ];

  return (
    <div className="container-qlcn">
      <div className="row">
      <div className="col-md-2">
           <Menu/>
          </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div className="title-qlcn">
              <h3>QUẢN LÝ KHOA</h3>
              <div className="form-addchuyennganh">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mã khoa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tên khoa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Thêm
                  </button>
                </form>
              </div>
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
