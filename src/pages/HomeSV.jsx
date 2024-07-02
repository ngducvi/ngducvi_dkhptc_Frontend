import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/homesv.css";
import Dropdown from "react-bootstrap/Dropdown";
import imgdkhp from "../assets/images/dkhp.png";
import imglichhoc from "../assets/images/lichoc.png";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getSinhVienByMaSinhVien } from "../services/sinhVienService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
const HomeSV = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const maSinhVien = localStorage.getItem('maSinhVien');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get sinh vien by maSinhVien
  const [sinhVien, setSinhVien] = useState({});
  //Lưu thông tin sinh viên vào local storage

  useEffect(() => {
    const fetchSinhVien = async () => {
      const sinhVien = await getSinhVienByMaSinhVien(maSinhVien);
      setSinhVien(sinhVien);
    };
    fetchSinhVien();
  }, [maSinhVien]);
console.log(sinhVien);

  return (
    <div>
      <h1>Trang sinh viên</h1>
      <div className="dropdown-box">
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-components-header">
             {sinhVien.hoTen}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-header">
              <Dropdown.Item
                eventKey="1"
                active
                onClick={() =>
                  navigate("/profile", {
                    state: {
                      sinhVien: sinhVien,
                    },
                  })
                }
              >
                Thông tin cá nhân
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={() => handleShow()}>
                Đỗi mật khẩu
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" active onClick={() => navigate("/")}>
                Đăng xuất
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </div>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-components-header">
          {sinhVien.maSinhVien}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-header">
          <Dropdown.Item
            eventKey="3"
            onClick={() =>
              navigate("/profile", {
                state: {
                  sinhVien: sinhVien,
                },
              })
            }
            active
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            eventKey="4"
            onClick={() => navigate("/chuongtrinhkhung")}
          >
            Chuong trinh Khung
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="5"
            onClick={() => navigate("/dangkyhocphan")}
          >
            Dang ky hoc phan
          </Dropdown.Item>
          <Dropdown.Item eventKey="7" onClick={() => navigate("/nhapdiem")}>
            Nhap Diem
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="8"
            onClick={() => navigate("/thanhtoanhocphi")}
          >
            Thanh toan hoc phi
          </Dropdown.Item>
          <Dropdown.Item eventKey="9" onClick={() => navigate("/thoikhoabieu")}>
            {" "}
            Thoi Khoa Bieu
          </Dropdown.Item>
          <Dropdown.Item eventKey="10" onClick={() => navigate("/congno")}>
            Cong no
          </Dropdown.Item>
          <Dropdown.Item eventKey="11" onClick={() => navigate("/xemdiem")}>
            Xem Diem
          </Dropdown.Item>
          <Dropdown.Item eventKey="17" onClick={() => navigate("/homegv")}>
            Trang Giảng viên
          </Dropdown.Item>
          <Dropdown.Item eventKey="18" onClick={() => navigate("/homenv")}>
            Trang Nhân viên
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>{" "}
      <Modal show={show} onHide={handleClose} className="form-modal">
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="oldPassword">Mật khẩu cũ</label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Mật khẩu cũ"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Mật khẩu mới"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Nhập lại mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Lưu */}
          <Button variant="primary" onClick={handleClose}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container-profilesv">
        <div className="row">
          <div className="col-md-7">
            <div className="box-df profile-ds-info">
              <div className="portlet-title">
                <div className="caption">
                  <span
                    className="caption-supject bold"
                    lang="db-thongtinsinhvien"
                  >
                    Thông tin sinh viên
                  </span>
                </div>
              </div>
              <div className="porlet-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="profile-userpic">
                      <img src="" alt="" className="img-responsive" />
                    </div>
                    <div className="text-center">
                      <a
                        href="/"
                        className="color-active"
                        lang="db-chitiet-button"
                      >
                        Xem Chi tiết
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <form>
                      <div>
                        <div className="form-group ">
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-mssv">MSSV</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{
                              sinhVien.maSinhVien
                            }</span>
                          </label>
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-lophoc">Lớp</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{sinhVien.lopHoc}</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-hoten">Họ tên</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{sinhVien.hoTen}</span>
                          </label>
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-khoahoc">Khóa học</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">2020 - 2021</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-gioitinh">Giới tính</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{sinhVien.gioiTinh}</span>
                          </label>
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-bacdaotao">Bậc đào tạo</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{sinhVien.bacDaoTao}</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-bgaysinh">Ngày sinh</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">
                            {moment(sinhVien.ngaySinh).format('DD-MM-YYYY')}
                             </span>
                          </label>
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-loaihinhdt">Loại hình đào tạo</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">
                              {sinhVien.loaiHinhDaoTao}
                            </span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-noisinh">Nơi sinh</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">
                              {sinhVien.hoKhauThuongTru}
                            </span>
                          </label>
                          <label htmlFor="" className="col-sm-6">
                            <span lang="sv-nganh">Nganh</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">
                            </span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="portlet">
              <div className="portlet-body">
                <div className="box-menu row">
                  <div className="col-sm-6">
                    <div className="item-box-menu box-df nhacnho profile-ds-info">
                      <div className="item-box-menu-icon">
                        <i className="fa fa-bell"></i>
                      </div>
                      <div className="item-box-menu-content">
                        <span lang="db-nhacnho">Nhắc nhở</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <a href="/thoikhoabieu" className="color-active" title="">
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-lichhoctuan">
                          Lịch học trong tuần
                        </h3>
                        <div className="desc clearfix">
                          <div className="icon-menu text-right">
                            <i
                              className="icon fa fa-calendar"
                              aria-hidden="true"
                            >
                              <img
                                src={imglichhoc}
                                alt="Profile Picture"
                                className="img-responsive"
                              />
                            </i>
                          </div>
                        </div>
                        <div className="text-left" lang="db-chitiet-button">
                          Xem chi tiết
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    {/* đăng ký học phần */}
                    <a href="/dangkyhocphan" className="color-active" title="">
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-dangkyhocphan">
                          Đăng ký học phần
                        </h3>

                        <div className="text-left" lang="db-chitiet-button">
                          Xem chi tiết
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    {/* Chương trình khung */}
                    <a
                      href="/chuongtrinhkhung"
                      className="color-active"
                      title=""
                    >
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-ctkhung">
                          Chương trình khung
                        </h3>
                        <div className="desc clearfix"></div>
                        <div className="text-left" lang="db-chitiet-button">
                          Xem chi tiết
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSV;
