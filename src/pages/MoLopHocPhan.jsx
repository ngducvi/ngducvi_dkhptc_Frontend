import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Menu from "../components/menu";
import Modal from "react-bootstrap/Modal";
export default function MoLopHocPhan() {
  const datalophocphan = [
    {
      maLopHocPhan: "LHP1",
      tenLopHocPhan: "Lớp học phần 1",
      lopDuKien: "DHCQ",
      siSoToiDa: "50",
      daDangKy: "40",
      trangThai: "Mở",
      maHocKy: "1",
      maGiangVien: "GV1",
    },
    {
      maLopHocPhan: "LHP2",
      tenLopHocPhan: "Lớp học phần 2",
      lopDuKien: "DHCQ",
      siSoToiDa: "50",
      daDangKy: "40",
      trangThai: "Mở",
      maHocKy: "1",
      maGiangVien: "GV2",
    },
  ];
  // Mở một modal hiển thị thông tin của giảng viên
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu />
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div>
              <h3>QUẢN LÝ LỚP HỌC PHẦN</h3>
              <div className="form-dk">
                <div className="formgroup">
                  <label htmlFor="">Mã lớp học phần</label>
                  <input type="text" id="maLopHocPhan" name="maLopHocPhan" />
                </div>
              </div>

              <div className="form-addchuyennganh">
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="">Mã lớp học phần: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã Học phần"
                        id="maLopHocPhan"
                        name="maLopHocPhan"
                        disabled
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Tên lớp học phần: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên học phần"
                        id="tenLopHocPhan"
                        name="tenLopHocPhan"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã lớp học phần</th>
                      <th>Tên lớp học phần</th>
                      <th>Lớp dự kiến</th>
                      <th>Sĩ số tối đa</th>
                      <th>Đã đăng ký</th>
                      <th>Trạng thái</th>
                      <th>Mã học kỳ</th>
                      <th>Mã giảng viên</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datalophocphan.map((lophocphan, index) => (
                      <tr key={index}>
                        <td>{lophocphan.maLopHocPhan}</td>
                        <td>{lophocphan.tenLopHocPhan}</td>
                        <td>{lophocphan.lopDuKien}</td>
                        <td>{lophocphan.siSoToiDa}</td>
                        <td>{lophocphan.daDangKy}</td>
                        <td>{lophocphan.trangThai}</td>
                        <td>{lophocphan.maHocKy}</td>
                        <td>{lophocphan.maGiangVien}</td>
                        <td>
                          <Button variant="primary">Sửa</Button>
                          <Button variant="danger">Xóa</Button>
                          {/* Thêm chi tiết lớp học phần */}
                          <Button
                            variant="primary"
                            onClick={() => handleShow()}
                          >
                            Chi tiết
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* Modal chi tiết */}
                  <Modal
                    show={show}
                    onHide={handleClose}
                    className="form-modal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Thông tin chi tiết lớp học phần</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <div className="title-model">dfg</div>
                        <div className="row">
             
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Mã Chi Tiết học phần: </label>
                              <span>123</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Mã lớp học phần: </label>
                              <span>LHP1</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Lịch học: </label>
                              <span>Thứ 2, 4, 6</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Nhóm thực hành: </label>
                              <span>1</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Phòng học: </label>
                              <span>PH1</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Dãy nhà: </label>
                              <span>DN1</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Mã giảng viên: </label>
                              <span>GV1</span>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-ttgv">
                              <label>Thời gian: </label>
                              <span>7h30 - 9h30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
