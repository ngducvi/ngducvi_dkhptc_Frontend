import React, { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Menu from "../components/menu";
import {
  getAllLopHocPhan,
  addLopHocPhan,
  updateLopHocPhan,
  deleteLopHocPhan,
} from "../services/lopHocPhanService";
import {
  getAllChiTietHocPhan,
  getChiTietHocPhanByMaLopHocPhan,
} from "../services/chiTietHocPhanService";
import moment from 'moment';
import Modal from "react-bootstrap/Modal";
export default function MoLopHocPhan() {
  const [dataLopHocPhan, setDataLopHocPhan] = useState([]);
  const [maLopHocPhan, setMaLopHocPhan] = useState("");
  const [tenLopHocPhan, setTenLopHocPhan] = useState("");
  const [lopDuKien, setLopDuKien] = useState("");
  const [siSoToiDa, setSiSoToiDa] = useState("");
  const [daDangKy, setDaDangKy] = useState("");
  const [trangThai, setTrangThai] = useState("");
  const [maHocPhan, setMaHocPhan] = useState("");
  const [maHocKy, setMaHocKy] = useState("");
  const [maGiangVien, setMaGiangVien] = useState("");
  const [error, setError] = useState("");
  const [editingLopHocPhan, setEditingLopHocPhan] = useState(null);

  const [selectedChiTietHocPhan, setSelectedChiTietHocPhan] = useState(null);

  // Mở một modal hiển thị thông tin của giảng viên
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (lopHocPhan) => {
    // Fetch the detailed information for the selected class
    const chiTietHocPhan = await getChiTietHocPhanByMaLopHocPhan(lopHocPhan.maLopHocPhan);
    // Extract the first element of the array
    const firstChiTietHocPhan = chiTietHocPhan[0];
    // Set the firstChiTietHocPhan as the selected value
    setSelectedChiTietHocPhan(firstChiTietHocPhan);
    setShow(true);
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllLopHocPhan();
    setDataLopHocPhan(data);
  };

  const handleAddLopHocPhan = async (event) => {
    event.preventDefault();
    const newLopHocPhan = {
      maLopHocPhan,
      tenLopHocPhan,
      lopDuKien,
      siSoToiDa,
      daDangKy,
      trangThai,
      hocPhan: { maHocPhan },
      hocKy: { maHocKy },
      giangVien: { maGiangVien },
    };
    await addLopHocPhan(newLopHocPhan);
    fetchData();
    setMaLopHocPhan("");
    setTenLopHocPhan("");
    setLopDuKien("");
    setSiSoToiDa("");
    setDaDangKy("");
    setTrangThai("");
    setMaHocPhan("");
    setMaHocKy("");
    setMaGiangVien("");
  };
 
  const handleDeleteLopHocPhan = async (id) => {
    try {
      await deleteLopHocPhan(id);
      fetchData();
    } catch (error) {
      setError("Không thể xóa lớp học phần.");
    }
  };

  const handleUpdateLopHocPhan = async () => {
    const updatedLopHocPhan = {
      maLopHocPhan: editingLopHocPhan.maLopHocPhan,
      tenLopHocPhan,
      lopDuKien,
      siSoToiDa,
      daDangKy,
      trangThai,
      hocPhan: { maHocPhan },
      hocKy: { maHocKy },
      giangVien: { maGiangVien },
    };
    await updateLopHocPhan(editingLopHocPhan.maLopHocPhan, updatedLopHocPhan);
    fetchData();
    setEditingLopHocPhan(null);
    setMaLopHocPhan("");
    setTenLopHocPhan("");
    setLopDuKien("");
    setSiSoToiDa("");
    setDaDangKy("");
    setTrangThai("");
    setMaHocPhan("");
    setMaHocKy("");
    setMaGiangVien("");
  };

  const handleEditClick = (lopHocPhan) => {
    setEditingLopHocPhan(lopHocPhan);
    setMaLopHocPhan(lopHocPhan.maLopHocPhan);
    setTenLopHocPhan(lopHocPhan.tenLopHocPhan);
    setLopDuKien(lopHocPhan.lopDuKien);
    setSiSoToiDa(lopHocPhan.siSoToiDa);
    setDaDangKy(lopHocPhan.daDangKy);
    setTrangThai(lopHocPhan.trangThai);
    setMaHocPhan(lopHocPhan.hocPhan.maHocPhan);
    setMaHocKy(lopHocPhan.hocPhan.hocKy.maHocKy);
    setMaGiangVien(lopHocPhan.giangVien.maGiangVien);
  };

  const handleCancelEdit = () => {
    setEditingLopHocPhan(null);
    setMaLopHocPhan("");
    setTenLopHocPhan("");
    setLopDuKien("");
    setSiSoToiDa("");
    setDaDangKy("");
    setTrangThai("");
    setMaHocPhan("");
    setMaHocKy("");
    setMaGiangVien("");
  };

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
                <form
                  onSubmit={
                    editingLopHocPhan
                      ? handleUpdateLopHocPhan
                      : handleAddLopHocPhan
                  }
                >
                  <div className="formgroup">
                    <label htmlFor="maLopHocPhan">Mã lớp học phần:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maLopHocPhan"
                      name="maLopHocPhan"
                      value={maLopHocPhan}
                      onChange={(e) => setMaLopHocPhan(e.target.value)}
                      disabled={editingLopHocPhan ? true : false} // Disable input field if editing
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="tenLopHocPhan">Tên lớp học phần:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tenLopHocPhan"
                      name="tenLopHocPhan"
                      value={tenLopHocPhan}
                      onChange={(e) => setTenLopHocPhan(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="lopDuKien">Lớp dự kiến:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lopDuKien"
                      name="lopDuKien"
                      value={lopDuKien}
                      onChange={(e) => setLopDuKien(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="siSoToiDa">Sĩ số tối đa:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="siSoToiDa"
                      name="siSoToiDa"
                      value={siSoToiDa}
                      onChange={(e) => setSiSoToiDa(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="daDangKy">Đã đăng ký:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="daDangKy"
                      name="daDangKy"
                      value={daDangKy}
                      onChange={(e) => setDaDangKy(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="trangThai">Trạng thái:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="trangThai"
                      name="trangThai"
                      value={trangThai}
                      onChange={(e) => setTrangThai(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="maHocPhan">Mã học phần:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maHocPhan"
                      name="maHocPhan"
                      value={maHocPhan}
                      onChange={(e) => setMaHocPhan(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="maHocKy">Mã học kỳ:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maHocKy"
                      name="maHocKy"
                      value={maHocKy}
                      onChange={(e) => setMaHocKy(e.target.value)}
                    />
                  </div>
                  <div className="formgroup">
                    <label htmlFor="maGiangVien">Mã giảng viên:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="maGiangVien"
                      name="maGiangVien"
                      value={maGiangVien}
                      onChange={(e) => setMaGiangVien(e.target.value)}
                    />
                  </div>
                  <div className="button-group">
                    {/* Thêm , Lưu và hủy ẩn Thêm khi Sửa*/}
                    {!editingLopHocPhan ? (
                      <Button variant="primary" type="submit">
                        Thêm
                      </Button>
                    ) : null}
                    {editingLopHocPhan ? (
                      <div>
                        <Button variant="primary" onClick={handleUpdateLopHocPhan}>
                          Lưu
                        </Button>
                        <Button variant="danger" onClick={handleCancelEdit}>
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
                      <th>Mã lớp học phần</th>
                      <th>Tên lớp học phần</th>
                      <th>Lớp dự kiến</th>
                      <th>Sĩ số tối đa</th>
                      <th>Đã đăng ký</th>
                      <th>Trạng thái</th>
                      <th>Mã học kỳ</th>
                      <th>Mã giảng viên</th>
                      <th>Mã học phần</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataLopHocPhan.map((lopHocPhan, index) => (
                      <tr key={lopHocPhan.maLopHocPhan}>
                        <td>{lopHocPhan.maLopHocPhan}</td>
                        <td>{lopHocPhan.tenLopHocPhan}</td>
                        <td>{lopHocPhan.lopDuKien}</td>
                        <td>{lopHocPhan.siSoToiDa}</td>
                        <td>{lopHocPhan.daDangKy}</td>
                        <td>{lopHocPhan.trangThai}</td>
                        <td>{lopHocPhan.hocPhan.hocKy.maHocKy}</td>
                        <td>{lopHocPhan.giangVien.maGiangVien}</td>
                        <td>{lopHocPhan.hocPhan.maHocPhan}</td>

                        <td>
                          {/* Button chi tiết hiện modal */}
                          <Button
                            variant="primary"
                            onClick={() => handleShow(lopHocPhan)}
                          >
                            Chi tiết
                          </Button>

                          <Button
                            variant="primary"
                            onClick={() => handleEditClick(lopHocPhan)}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() =>
                              handleDeleteLopHocPhan(lopHocPhan.maLopHocPhan)
                            }
                          >
                            Xóa
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
                        {/* Hiển thị thông tin chi tiết học phần */}
                        {selectedChiTietHocPhan && (
                          <div className="row">
                           
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Mã Chi Tiết học phần: </label>
                                <span>
                                  {selectedChiTietHocPhan.maChiTietHocPhan}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Phòng học: </label>
                                <span>
                                  {selectedChiTietHocPhan.phongHoc}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Nhóm thực hành:</label>
                                <span>
                                  {selectedChiTietHocPhan.nhomThucHanh}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Tháng:</label>
                                <span>{selectedChiTietHocPhan.thang}</span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Thời gian bắt đầu:</label>
                                <span>
                                  {moment(selectedChiTietHocPhan.thoiGianBD).format('DD-MM-YYYY')}
                                  </span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Thời gian kết thúc:</label>
                                {/* selectedChiTietHocPhan.thoiGianKT  in ra theo ngày tháng năm*/}
                                <span>
                                {moment(selectedChiTietHocPhan.thoiGianKT).format('DD-MM-YYYY')}

                                  {/* {selectedChiTietHocPhan.thoiGianKT} */}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Thứ:</label>
                                <span>{selectedChiTietHocPhan.thu}</span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Tiết:</label>
                                <span>{selectedChiTietHocPhan.tiet}</span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Tuần:</label>
                                <span>{selectedChiTietHocPhan.tuan}</span>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-ttgv">
                                <label>Mã giảng viên:</label>
                                <span>{selectedChiTietHocPhan.lopHocPhan.giangVien.maGiangVien}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      {/* Lưu */}
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
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
