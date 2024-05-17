
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Menusv from "../components/menusv";
export default function ChuongTrinhKhung() {
  const datachuongtrinhkhung = [
    {
      id: 1,
      hocki: 1,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2201",
      tenmh: "Lập trình hướng đối tượng",
      mahp: "INT2201",
      hptq: "",
      sotc: 4,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },
    {
      id: 2,
      hocki: 1,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2202",
      tenmh: "Cấu trúc dữ liệu và giải thuật",
      mahp: "INT2202",
      hptq: "",
      sotc: 4,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },
    {
      id: 3,
      hocki: 1,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2203",
      tenmh: "Nhập môn công nghệ phần mềm",
      mahp: "INT2203",
      hptq: "",
      sotc: 3,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },
    {
      id: 4,
      hocki: 2,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2204",
      tenmh: "Toán rời rạc",
      mahp: "INT2204",
      hptq: "",
      sotc: 3,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },
    {
      id: 5,
      hocki: 2,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2205",
      tenmh: "Kiến trúc máy tính",
      mahp: "INT2205",
      hptq: "",
      sotc: 3,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },
    {
      id: 6,
      hocki: 2,
      chuyennganh: "Công nghệ thông tin",
      mamh: "INT2206",
      tenmh: "Hệ điều hành",
      mahp: "INT2206",
      hptq: "",
      sotc: 3,
      sotlt: 30,
      sotth: 30,
      dat: "Có",
    },

  ]
  return (
    <div className="container-dkhp">
      <div className="row" >
      <div className="col-md-2">
          <Menusv />
        </div>
        <div className="col-md-10 col-xs-12"><div className="box-dkhp">
        <h1>Tra cứu chương trình khung</h1>
        <div className="form-dk">
          <div className="formgroup">
            <label htmlFor="hocmoi">SINH VIÊN: </label>
            <label htmlFor="">Nguyen DUc Vi</label>
          </div>
          <div className="formgroup">
            <input type="radio" name="loaihoc" id="hocmoi" />
            <label htmlFor="hocmoi">Học mới</label>
          </div>
          <div className="formgroup">
            <input type="radio" name="loaihoc" id="hochlai" />
            <label htmlFor="hochlai">Học lại</label>
          </div>
          <div className="formgroup">
            <input type="radio" name="loaihoc" id="hoccaitien" />
            <label htmlFor="hoccaitien">Học cải thiện</label>
          </div>
        </div>
        <div className="title-dkhp">
          <h1>THÔNG TIN CHƯƠNG TRÌNH KHUNG</h1>
          <div className="box-monhocphan">
            <table className="table-form">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã môn học</th>
                  <th>Tên môn học</th>
                  <th>Mã học phần</th>
                  <th>Học phần tiên quyết</th>
                  <th>Số tín chỉ</th>
                  <th>Số tiết lý thuyết</th>
                  <th>Số tiết thực hành</th>
                  <th>Đạt</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 1</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
              </thead>
              <tbody>
                {/* get các học phần theo hk1 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 1) {
                    return (
                      <tr >
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 2</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk2 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 2) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>

              <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN TỰ CHỌN</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk2 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 2) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>

              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 3</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk3 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 3) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 4</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk4 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 4) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN TỰ CHỌN</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk4 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 4) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 5</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk5 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 5) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 6</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk6 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 6) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN TỰ CHỌN</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk6 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 6) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 7</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk7 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 7) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
              <tr>
                  <th colSpan="5" style={{backgroundColor:"#6cbbda"}}>HỌC KÌ 8</th>
                  <th colSpan="7" style={{backgroundColor:"#6cbbda"}}>TỔNG SỐ TC: 11</th>
                </tr>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk8 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 8) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>HỌC PHẦN TỰ CHỌN</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC: </th>
                </tr>
                </thead>
                <tbody>
                {/* get các học phần theo hk8 */}
                {datachuongtrinhkhung.map((data) => {
                  if (data.hocki === 8) {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.mamh}</td>
                        <td className="tenmonhoc">{data.tenmh}</td>
                        <td>{data.mahp}</td>
                        <td>{data.hptq}</td>
                        <td>{data.sotc}</td>
                        <td>{data.sotlt}</td>
                        <td>{data.sotth}</td>
                        <td>{data.dat}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
              <thead>
                <tr>
                  <th colSpan="5" className="title-left" style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC/ĐVHT YÊU CẦU</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>155</th>
                </tr>
                </thead>
                <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC/DVHT BẮT BUỘC</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>123</th>
                </tr>
                </thead>
                <thead>
                <tr>
                  <th colSpan="5" style={{backgroundColor:"#cae1ea",color:"blue"}}>TỔNG SỐ TC/DVHT TỰ CHỌN</th>
                  <th colSpan="7"style={{backgroundColor:"#cae1ea",color:"blue"}}>32</th>
                </tr>
                </thead>
            </table>
          </div>
        </div>
      </div></div>
      </div>
      
    </div>
  );
}
