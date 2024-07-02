import React from "react";
import { useNavigate } from "react-router-dom";

export default function ControlLogin() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ControlLogin</h1>
      {/* 3 input lựa chọn trang đăng nhập */}
      <input
        type="button"
        value="Sinh viên"
        onClick={() => {
          navigate("/login");
        }}
      />
      <input type="button" value="Nhân viên"  onClick={() => {
          navigate("/loginnv");
        }}/>
      <input type="button" value="Giảng viên" />
    </div>
  );
}
