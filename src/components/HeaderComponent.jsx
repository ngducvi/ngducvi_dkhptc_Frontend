import React, { useState, useEffect } from "react";
import "../assets/styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const HeaderComponent = () => {
  const navigate = useNavigate();
  // Mở một modal hiển thị thông tin của giảng viên
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header">
      <div className="container">
        <div className="box">
          <p>CỔNG ĐĂNG KÝ HỌC PHẦN SINH VIÊN</p>
        </div>
        <div className="dropdown-box">
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-components-header">
              Nguyễn Đức Vĩ
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-header">
              <Dropdown.Item
                eventKey="1"
                active
                onClick={() => navigate("/profile")}
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
      </div>
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
    </div>
  );
};

export default HeaderComponent;
