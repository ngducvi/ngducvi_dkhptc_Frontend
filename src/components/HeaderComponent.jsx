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
        
      </div>
      
    </div>
  );
};

export default HeaderComponent;
