import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/homesv.css";
import Dropdown from "react-bootstrap/Dropdown";
import imgdkhp from "../assets/images/dkhp.png";
import imglichhoc from "../assets/images/lichoc.png";
import { useNavigate,useLocation } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { getNhanVienByMaNhanVien } from "../services/userservice";
import Avatar, { genConfig } from 'react-nice-avatar'
const HomeNV = () => {
  const [nhanVien, setNhanVien] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const config = genConfig("hi@dapi.to") 
  const maNhanVien = localStorage.getItem("maNhanVien");
  useEffect(() => {
    getNhanVienByMaNhanVien(maNhanVien).then((response) => {
      setNhanVien(response);
    });
  }, []);
  console.log(nhanVien);

  return (
    <div className="container-h">
      <h1>TRANG NHÂN VIÊN</h1>
      <div className="dropdown-box">
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-components-header">
             {nhanVien.hoTen}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-header">
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
      <div className="container-profilesv">
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
                      <span>Quản lý Học kì</span>
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
          <div className="col-md-3">
            <div className="box-df profile-ds-info">
              <div className="portlet-title">
                <div className="caption">
                  <span
                    className="caption-supject bold"
                    lang="db-thongtinsinhvien"
                  >
                    Thông Nhân vien
                  </span>
                </div>
              </div>
              <div className="porlet-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="profile-userpic">
                      {/*avatar random  */}
                      <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
                      
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <form>
                      <div>
                        <div className="form-group ">
                          <label htmlFor="" className="col-sm-12">
                            <span lang="sv-mssv">MNV</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{nhanVien.maNhanVien}</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-12">
                            <span lang="sv-hoten">Họ tên</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{nhanVien.hoTen}</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-12">
                            <span lang="sv-gioitinh">Giới tính</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">Nu</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-12">
                            <span lang="sv-bgaysinh">Ngày sinh</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{nhanVien.ngaySinh}</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="col-sm-12">
                            <span lang="sv-noisinh">Nơi sinh</span>
                            <span lang="sv-noisinh"> : </span>
                            <span className="bold">{nhanVien.diaChi}</span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
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
                    <a href="/molophocphan" className="color-active" title="">
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-lichhoctuan">
                          Mở lớp học phần
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
                    <a href="/qlsv" className="color-active" title="">
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-dangkyhocphan">
                          Quản lý sinh viên
                        </h3>

                        <div className="text-left" lang="db-chitiet-button">
                          Xem chi tiết
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="/qlhocphan"
                      className="color-active"
                      title=""
                    >
                      <div className="item-box-menu box-df profile-ds-info">
                        <h3 className="name" lang="db-ctkhung">
                          Quản lý học phần
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

export default HomeNV;
