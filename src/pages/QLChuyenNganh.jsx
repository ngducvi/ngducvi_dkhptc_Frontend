import React from "react";
import { Button } from "react-bootstrap";
import Menu from '../components/menu'
export default function QLChuyenNganh() {
  const datachuyennghanh = [
    {
      id: 1,
      maChuyenNganh: "CNTT",
      tenChuyenNganh: "Công nghệ thông tin",
      maKhoa: "CNTT",
    },
    {
      id: 2,
      maChuyenNganh: "MMT",
      tenChuyenNganh: "Mạng máy tính",
      maKhoa: "CNTT",
    },
    {
      id: 3,
      maChuyenNganh: "ATTT",
      tenChuyenNganh: "An toàn thông tin",
      maKhoa: "CNTT",
    },
  ];

  return (
    <div className="container-qlcn">
      <div className="row">
      <div className="col-md-2">
            <div className="box-df-menu">
              <div className="accordion-menu">
                <ul>
                  <li>
                    <a href="/homenv">
                      <span>Trang chủ</span>
                    </a>
                  </li>
                  <li>
                    <a href="/qlsv">
                      <span>Quản lý Sinh vien</span>
                    </a>
                  </li>
                  <li>
                    <a href="/qlkhoa">
                      <span>Quản lý Khoa</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/qlchuyennganh">
                      <span>Quản lý Chuyên nghành</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/qlmonhoc">
                      <span>Quản lý Môn học</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/qlhocki">
                      <span>Quản lý Học ky</span>
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="/qlhocphan">
                      <span>Quản lý Học phần</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/molophocphan">
                      <span>Quản lý Lớp học phần</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-qlcn">
            <div className="title-qlcn">
              <h3>QUẢN LÝ CHUYÊN NGÀNH</h3>
              <div className="select-khoa">
                <label htmlFor="makhoa">Chọn khoa</label>
                <select id="makhoa" name="makhoa">
                  <option value="cntt">Công nghệ thông tin</option>
                  <option value="kt">Kỹ thuật</option>
                  <option value="ketoan">Kế toán</option>
                </select>
              </div>
              <div className="form-addchuyennganh">
                <div className="button-qlcn">
                  <Button variant="primary">Thêm chuyên ngành</Button>
                </div>
                <div className="form-addcn">
                  <div className="form-group">
                    <label htmlFor="machuyennganh">Mã chuyên ngành</label>
                    <input
                      type="text"
                      className="form-control"
                      id="machuyennganh"
                      placeholder="Nhập mã chuyên ngành"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tenchuyennganh">Tên chuyên ngành</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenchuyennganh"
                      placeholder="Nhập tên chuyên ngành"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="makhoa">Mã khoa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="makhoa"
                      placeholder="Nhập mã khoa"
                    />
                  </div>
                  <div className="button-group">
                    <Button variant="primary">Lưu</Button>
                    <Button variant="danger">Hủy</Button>
                  </div>
                </div>
              </div>
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
                    {datachuyennghanh.map((chuyennganh, index) => (
                      <tr key={chuyennganh.id}>
                        <td>{index + 1}</td>
                        <td>{chuyennganh.maChuyenNganh}</td>
                        <td>{chuyennganh.tenChuyenNganh}</td>
                        <td>{chuyennganh.maKhoa}</td>
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
