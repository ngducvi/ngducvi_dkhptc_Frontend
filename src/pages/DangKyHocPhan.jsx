import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Menu from "../components/menu";
import Menusv from "../components/menusv";
export default function DangKyHocPhan() {
  const datahocki = [
    { id: 1, name: "Học kì 1", value: "1" },
    { id: 2, name: "Học kì 2", value: "2" },
    { id: 3, name: "Học kì 3", value: "3" },
    { id: 4, name: "Học kì hè", value: "4" },
  ];
  const datahocphan = [
    {
      id: 1,
      mamh: "INT2201",
      tenmh: "Lập trình hướng đối tượng",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2202",
    },
    {
      id: 2,
      mamh: "INT2202",
      tenmh: "Lập trình web",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2203",
    },
    {
      id: 3,
      mamh: "INT2203",
      tenmh: "Lập trình di động",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2204",
    },
    {
      id: 4,
      mamh: "INT2204",
      tenmh: "Lập trình game",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2205",
    },
    {
      id: 5,
      mamh: "INT2205",
      tenmh: "Lập trình ứng dụng",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2206",
    },
    {
      id: 6,
      mamh: "INT2206",
      tenmh: "Lập trình cơ sở dữ liệu",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2207",
    },
    {
      id: 7,
      mamh: "INT2207",
      tenmh: "Lập trình hệ thống",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2208",
    },
    {
      id: 8,
      mamh: "INT2208",
      tenmh: "Lập trình mạng",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2209",
    },
    {
      id: 9,
      mamh: "INT2209",
      tenmh: "Lập trình nhúng",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2210",
    },
    {
      id: 10,
      mamh: "INT2210",
      tenmh: "Lập trình hệ điều hành",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2211",
    },
    {
      id: 11,
      mamh: "INT2211",
      tenmh: "Lập trình hệ thống nhúng",
      sotc: "3",
      batbuoc: "V",
      hocphantienquyet: "INT2212",
    },
  ];
  const datalophocphan = [
    {
      id: 1,
      mamh: "INT2201",
      tenmh: "Lập trình hướng đối tượng",
      lopdk: "INT2201.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đang lên kế hoạch",
    },
    {
      id: 2,
      mamh: "INT2202",
      tenmh: "Lập trình web",
      lopdk: "INT2202.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đã đóng",
    },
    {
      id: 3,
      mamh: "INT2203",
      tenmh: "Lập trình di động",
      lopdk: "INT2203.1",
      siso: "50",
      dadk: "40",
      trangthai: "Mở",
    },
    {
      id: 4,
      mamh: "INT2204",
      tenmh: "Lập trình game",
      lopdk: "INT2204.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đang lên kế hoạch",
    },
    {
      id: 5,
      mamh: "INT2205",
      tenmh: "Lập trình ứng dụng",
      lopdk: "INT2205.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đã đóng",
    },
    {
      id: 6,
      mamh: "INT2206",
      tenmh: "Lập trình cơ sở dữ liệu",
      lopdk: "INT2206.1",
      siso: "50",
      dadk: "40",
      trangthai: "Mở",
    },
    {
      id: 7,
      mamh: "INT2207",
      tenmh: "Lập trình hệ thống",
      lopdk: "INT2207.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đang lên kế hoạch",
    },
    {
      id: 8,
      mamh: "INT2208",
      tenmh: "Lập trình hệ điều hành",
      lopdk: "INT2208.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đã đóng",
    },
    {
      id: 9,
      mamh: "INT2209",
      tenmh: "Lập trình hệ điều hành",
      lopdk: "INT2209.1",
      siso: "50",
      dadk: "40",
      trangthai: "Mở",
    },
    {
      id: 10,
      mamh: "INT2210",
      tenmh: "Lập trình hệ điều hành",
      lopdk: "INT2210.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đang lên kế hoạch",
    },
  ];
  const datachitiethocphan = [
    {
      id: 1,
      mamh: "INT2201",
      tenmh: "Lập trình hướng đối tượng",
      lopdk: "INT2201.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đang lên kế hoạch",
      thoigian: "Thứ 2, 4, 6",
      phonghoc: "A101",
      giangvien: "Nguyễn Văn A",
      ngaybatdau: "01/01/2022",
      ngayketthuc: "01/06/2022",
      ghichu: "Lớp học phần này dành cho sinh viên năm 3",
    },
    {
      id: 2,
      mamh: "INT2202",
      tenmh: "Lập trình web",
      lopdk: "INT2202.1",
      siso: "50",
      dadk: "40",
      trangthai: "Đã đóng",
      thoigian: "Thứ 3, 5, 7",
      phonghoc: "A102",
      giangvien: "Nguyễn Văn B",
      ngaybatdau: "01/01/2022",
      ngayketthuc: "01/06/2022",
      ghichu: "Lớp học phần này dành cho sinh viên năm 3",
    },
    {
      id: 3,
      mamh: "INT2203",
      tenmh: "Lập trình di động",
      lopdk: "INT2203.1",
      siso: "50",
      dadk: "40",
      trangthai: "Mở",
      thoigian: "Thứ 2, 4, 6",
      phonghoc: "A103",
      giangvien: "Nguyễn Văn C",
      ngaybatdau: "01/01/2022",
      ngayketthuc: "01/06/2022",
      ghichu: "Lớp học phần này dành cho sinh viên năm 3",
    },
  ];
  const lhpdadangky = [
    {
      id: 1,
      malhp: "INT2201.1",
      tenmh: "Lập trình hướng đối tượng",
      lopdk: "INT2201.1",
      sotc: "3",
      hocphi: "1.000.000",
      hanop: "01/01/2022",
      thu: "Chưa nộp",
      trangthaidk: "Đã đăng ký",
      ngaydk: "01/01/2022",
      trangthailhp: "Mở",
    },
    {
      id: 2,
      malhp: "INT2202.1",
      tenmh: "Lập trình web",
      lopdk: "INT2202.1",
      sotc: "3",
      hocphi: "1.000.000",
      hanop: "01/01/2022",
      thu: "Chưa nộp",
      trangthaidk: "Đã đăng ký",
      ngaydk: "01/01/2022",
      trangthailhp: "Mở",
    },
    {
      id: 3,
      malhp: "INT2203.1",
      tenmh: "Lập trình di động",
      lopdk: "INT2203.1",
      sotc: "3",
      hocphi: "1.000.000",
      hanop: "01/01/2022",
      thu: "Chưa nộp",
      trangthaidk: "Đã đăng ký",
      ngaydk: "01/01/2022",
      trangthailhp: "Mở",
    },
  ];

  const [selectedMonHoc, setSelectedMonHoc] = useState(null);
  const [filteredLopHocPhan, setFilteredLopHocPhan] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(null); // State lưu trữ giá trị radio button được chọn
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (selectedMonHoc) {
      const filtered = datalophocphan.filter(
        (lop) => lop.mamh === selectedMonHoc
      );
      setFilteredLopHocPhan(filtered);
    }
  }, [selectedMonHoc]);
  // Mở một modal hiển thị thông tin của giảng viên
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-dkhp">
      <div className="row" >
      <div className="col-md-2">
          <Menusv />
        </div>
        <div className="col-md-10 col-xs-12">
      <div className="box-dkhp">
        <h1>Đăng ký học phần</h1>
        <div className="form-dk">
          <div className="formgroup">
            <label htmlFor="">Đợt đăng ký</label>
            <select name="" id="">
              {datahocki.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
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
          <h1>MÔN HỌC PHẦN ĐANG CHỜ ĐĂNG KÝ</h1>
          <div className="box-monhocphan">
            <table className="table-form">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>STT</th>
                  <th>Mã môn học</th>
                  <th>Tên môn học</th>
                  <th>Số tín chỉ</th>
                  <th>Bắt buộc</th>
                  <th>Học phần tiên quyết</th>
                </tr>
              </thead>
              <tbody>
                {datahocphan.map((item, index) => (
                 <tr key={item.id} className={`form-table ${selectedRadio === item.id ? 'selected' : ''}`}>
                 {/* Thêm class 'selected' nếu radio được chọn */}
                    <td className="col-sm-1">
                      <input
                        type="radio"
                        name="dangky"
                        id={`dangky${index}`}
                        onClick={() => {
                          setSelectedMonHoc(item.mamh);
                          setSelectedRadio(item.id);
                        }}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td className="col-sm-1">{item.mamh}</td>
                    <td className="tenmonhoc">{item.tenmh}</td>
                    <td>{item.sotc}</td>
                    <td>{item.batbuoc}</td>
                    <td>{item.hocphantienquyet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="title-dkhp">
          <h1>LỚP HỌC PHẦN CHỜ ĐĂNG KÝ</h1>
          <div className="box-monhocphan">
            <table className="table-form">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>STT</th>
                  <th>Mã lớp học phần</th>
                  <th>Tên môn học</th>
                  <th>Lớp dự kiến</th>
                  <th>Sĩ số tối đa</th>
                  <th>Đã đăng ký</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {filteredLopHocPhan.map((item, index) => (
                  <tr key={item.id} className="form-table">
                    <td className="col-sm-1">
                      <input type="checkbox" name="dangkyLop" id="dangkyLop" />
                    </td>
                    <td>{index + 1}</td>
                    <td className="col-sm-1">{item.lopdk}</td>
                    <td className="tenmonhoc">{item.tenmh}</td>
                    <td>{item.lopdk}</td>
                    <td>{item.siso}</td>
                    <td>{item.dadk}</td>
                    <td>{item.trangthai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="title-dkhp">
          <h1>CHI TIẾT HỌC PHẦN</h1>
          <div className="box-monhocphan">
            <table className="table-form">
              <thead>
                <tr>
                  <th></th>
                  <th>STT</th>
                  <th>Lịch học</th>
                  <th>Phòng</th>
                  <th>Dãy nhà</th>
                  <th>Giảng viên</th>
                  <th>Thời gian</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {datachitiethocphan.map((item, index) => (
                  <tr key={item.id} className="form-table">
                    {/* input radio */}
                    <td>
                      <input type="radio" name="chitiet" id="chitiet" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.thoigian}</td>
                    <td>{item.phonghoc}</td>
                    <td>A</td>
                    <td>{item.giangvien}</td>
                    <td>
                      {item.ngaybatdau} - {item.ngayketthuc}
                    </td>
                    <td>
                      <Button onClick={handleShow}>Xem</Button>
                      <Modal show={show} onHide={handleClose} className="form-modal">
                        <Modal.Header closeButton>
                          <Modal.Title>THÔNG TIN GIẢNG VIÊN</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div>
                            <div className="title-model">{item.giangvien}</div>
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Mã nhân sự: </label>
                                  <span>01/01/1999</span>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Giới tính: </label>
                                  <span>Nam</span>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Ngày sinh: </label>
                                  <span>01/01/1999</span>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Nơi sinh: </label>
                                  <span>Tây Ninh</span>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Chức vụ: </label>
                                  <span id="giangvien" name='giangvien'>Giảng viên</span>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="form-ttgv">
                                  <label>Phòng ban: </label>
                                  <span>Khoa quản trị kinh doanh</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Button style={{marginTop:"13px",marginBottom:"10px"}} variant="btn btn-warning">Đăng ký môn học</Button>
            </div>
            <div className="title-dkhp">
          <h1>LỚP HỌC PHẦN CHỜ ĐĂNG KÝ</h1>
          
          <div className="box-monhocphan">
            <button style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              float: "right",
              marginBottom: "10px",
            }} onClick={handlePrint}>Print</button>
            <table className="table-form">
              <thead>
                <tr>
                  <th>Thao tác</th>
                  <th>STT</th>
                  <th>Mã LHP</th>
                  <th>Tên môn học</th>
                  <th>Lớp học dự kiến</th>
                  <th>Số TC</th>
                  <th>Học Phí</th>
                  <th>Hạn nộp</th>
                  <th>Thu</th>
                  <th>Trạng thái ĐK</th>
                  <th>Ngày ĐK</th>
                  <th>Trạng thái LHP</th>
                </tr>
              </thead>
              <tbody>
                {lhpdadangky.map((item, index) => (
                  <tr key={item.id} className="form-table">
                    <td>
                      <Button variant="btn btn-warning">Hủy</Button>
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.malhp}</td>
                    <td>{item.tenmh}</td>
                    <td>{item.lopdk}</td>
                    <td>{item.sotc}</td>
                    <td>{item.hocphi}</td>
                    <td>{item.hanop}</td>
                    <td>{item.thu}</td>
                    <td>{item.trangthaidk}</td>
                    <td>{item.ngaydk}</td>
                    <td>{item.trangthailhp}</td>
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
      </div>
      

      
    </div>
  );
}
