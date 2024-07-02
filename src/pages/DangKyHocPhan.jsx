import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Menu from "../components/menu";
import Menusv from "../components/menusv";
import { useNavigate, useLocation } from "react-router-dom";
import { getSinhVienByMaSinhVien } from "../services/sinhVienService";
import { getAllHocPhan } from "../services/hocPhanService";
import { getAllLopHocPhan } from "../services/lopHocPhanService";
import {getAllChiTietHocPhan} from "../services/chiTietHocPhanService";
import {dangKyLopHocPhan, getAllLopHocPhanDaDangKy,deleteMonHoc} from "../services/lopHocPhanDaDangKyService";
import moment from "moment";
export default function DangKyHocPhan() {
  const maSinhVien = localStorage.getItem("maSinhVien");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedHocKy, setSelectedHocKy] = useState(""); // State để lưu mã học kỳ được chọn
  const [sinhVien, setSinhVien] = useState({});
  const [dataLophocphan, setDataLopHocPhan] = useState([]);
  const [datahocphan, setDataHocPhan] = useState([]);
  const [dataChiTietHocPhan, setDataChiTietHocPhan] = useState([]);
  const [dataLopHocPhanDaDangKy, setDataLopHocPhanDaDangKy] = useState([]);
  // get all lop hoc phan da dang ky
  useEffect(() => {
    const fetchLopHocPhanDaDangKy = async () => {
      const dataLophocphandadangky = await getAllLopHocPhanDaDangKy();
      setDataLopHocPhanDaDangKy(dataLophocphandadangky);
    }
    fetchLopHocPhanDaDangKy();
  }, []);

  useEffect(() => {
    const fetchSinhVien = async () => {
      const sinhVien = await getSinhVienByMaSinhVien(maSinhVien);
      setSinhVien(sinhVien);
    };
    fetchSinhVien();
  }, [maSinhVien]);
  // get all hoc phan
console.log(sinhVien.gmail);
 
  useEffect(() => {
    const fetchHocPhan = async () => {
      const datahocphan = await getAllHocPhan();
      setDataHocPhan(datahocphan);
    };
    fetchHocPhan();
  }, []);

  // Hàm xử lý khi chọn một học kỳ từ dropdown
  const handleHocKyChange = (e) => {
    setSelectedHocKy(e.target.value);
  };
  // get all chi tiet hoc phan
  useEffect(() => {
    const fetchChiTietHocPhan = async () => {
      const dataChiTietHocPhan = await getAllChiTietHocPhan();
      setDataChiTietHocPhan(dataChiTietHocPhan);
    };
    fetchChiTietHocPhan();
  }, []);

  const renderHocKyOptions = () => {
    return datahocki.map((item) => (
      <option key={item.id} value={item.value}>
        {item.name}
      </option>
    ));
  };
  
  useEffect(() => {
    const fetchLopHocPhan = async () => {
      const dataLophocphan = await getAllLopHocPhan();
      setDataLopHocPhan(dataLophocphan);
    };
    fetchLopHocPhan();
  }, []);


  const datahocki = [
    { id: 1, name: "HK1 (2024-2025)", value: "11" },
    { id: 2, name: "HK2 (2024-2025)", value: "10" },
    { id: 3, name: "HK1 (2024-2025)", value: "09" },
    { id: 4, name: "HK3 (2023-2024)", value: "08" },
    { id: 5, name: "HK2 (2023-2024)", value: "07" },
    { id: 6, name: "HK1 (2023-2024)", value: "06" },
    { id: 7, name: "HK3 (2022-2023)", value: "05" },
    { id: 8, name: "HK2 (2022-2023)", value: "04" },

  ];
  const [selectedMonHoc, setSelectedMonHoc] = useState(null);
  const [filteredLopHocPhan, setFilteredLopHocPhan] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(null); // State lưu trữ giá trị radio button được chọn
const [selectedLopHocPhan, setSelectedLopHocPhan] = useState(null); // State lưu trữ mã lớp học phần được chọn
  const handlePrint = () => {
    window.print();
  };

 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(datahocphan);
console.log(selectedLopHocPhan+"lop hoc phan");
  const handleDangKyLopHocPhan = async () => {
    if (selectedLopHocPhan && maSinhVien) {
      // Kiểm tra xem lớp học phần đã đăng ký trước đó hay chưa
      const isLopHocPhanDaDangKy = dataLopHocPhanDaDangKy.some(item => item.lopHocPhan.maLopHocPhan === selectedLopHocPhan);
  
      if (isLopHocPhanDaDangKy) {
        alert('Lớp học phần đã được đăng ký trước đó.');
        console.error('Lớp học phần đã được đăng ký trước đó.');
        return; // Ngăn chặn việc đăng ký
      }
  
      // Tiến hành đăng ký
      const lopHocPhanDaDangKy = {
        // mã đăng ký tự động tăng
        maDangKy: Math.floor(Math.random() * 1000000), // Mã đăng ký tự động tăng
        sinhVien: {
          maSinhVien: maSinhVien,
        },
        lopHocPhan: {
          maLopHocPhan: selectedLopHocPhan,
        },
        ngayDangKy: moment().format("YYYY-MM-DD"),
        trangThaiLHP: "Đang mở",
        trangThaiDangKy: "Đăng ký mới",
        soTinChi: dataLophocphan.find((item) => item.maLopHocPhan === selectedLopHocPhan).hocPhan.soTinChi,
        hanNop: moment().add(7, "days").format("YYYY-MM-DD"),
        lopHocDuKien: dataLophocphan.find((item) => item.maLopHocPhan === selectedLopHocPhan).lopDuKien,
        // học phí bằng số tín chỉ nhân với 900000
        hocPhi: dataLophocphan.find((item) => item.maLopHocPhan === selectedLopHocPhan).hocPhan.soTinChi * 900000,
        thu: "Chưa thu"
      };
  
      try {
        const result = await dangKyLopHocPhan(lopHocPhanDaDangKy);
        alert('Đăng ký thành công.');
        console.log('Đăng ký thành công:', result);
        // Cập nhật lại danh sách học phần đã đăng ký
        setDataLopHocPhanDaDangKy([...dataLopHocPhanDaDangKy, result]);
      } catch (error) {
        alert('Có lỗi xảy ra khi đăng ký.');
        console.error('Có lỗi xảy ra khi đăng ký:', error);
      }
    } else {
      alert('Vui lòng chọn lớp học phần và đảm bảo mã sinh viên hợp lệ');
      console.error('Vui lòng chọn lớp học phần và đảm bảo mã sinh viên hợp lệ');
    }
  };
  

  const handleDeleteMonHoc = async (maDangKy) => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn hủy đăng ký môn học này không?");
    if (confirmed) {
      try {
        // Lấy thông tin chi tiết của môn học cần xóa
        const monHoc = dataLopHocPhanDaDangKy.find((item) => item.maDangKy === maDangKy);
        // Kiểm tra xem trạng thái đăng ký của môn học là "Đăng ký mới" hay không
        if (monHoc.trangThaiDangKy === "Đăng ký mới") {
          // Nếu là "Đăng ký mới", thực hiện xóa
          await deleteMonHoc(maDangKy);
          // Cập nhật lại danh sách lớp học phần đã đăng ký
          setDataLopHocPhanDaDangKy(dataLopHocPhanDaDangKy.filter((item) => item.maDangKy !== maDangKy));
          console.log("Hủy đăng ký thành công.");
        } else {
          // Nếu trạng thái không phải "Đăng ký mới", hiển thị thông báo
          alert("Không thể hủy đăng ký vì trạng thái không phải 'Đăng ký mới'.");
          console.log("Không thể hủy đăng ký vì trạng thái không phải 'Đăng ký mới'.");
        }
      } catch (error) {
        console.error('Có lỗi xảy ra khi xóa môn học:', error);
      }
    }
  };
  


  return (
    <div className="container-dkhp">
      <div className="row">
        <div className="col-md-2">
          <Menusv />
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-dkhp">
            <h1>Đăng ký học phần</h1>
            <div className="form-dk">
              <div className="formgroup">
                <label htmlFor="">Đợt đăng ký</label>
                <select name="" id="" onChange={handleHocKyChange}>
                  {renderHocKyOptions()}
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
                    {/* Lọc và hiển thị danh sách học phần dựa trên học kỳ được chọn */}
                    {datahocphan
                      .filter((item) => item.hocKy?.maHocKy === selectedHocKy && item.monHoc.chuyenNganh.maChuyenNganh === sinhVien.chuyenNganh?.maChuyenNganh)
                      // sinhVien.chuyenNganh?.maChuyenNganh
                      .map((item, index) => (
                        <tr key={item.maHocPhan} className="form-table">
                          <td className="col-sm-1">
                            <input
                              type="radio"
                              name="monhoc"
                              id="monhoc"
                              value={item.maHocPhan}
                              onChange={(e) => setSelectedMonHoc(e.target.value)}
                            />
                          </td>
                          <td>{index + 1}</td>
                          <td className="col-sm-1">{item.maHocPhan}</td>
                          <td className="tenmonhoc">{item.tenHocPhan}</td>
                          <td>{item.soTinChi}</td>
                          <td>{item.bacBuoc}</td>
                          <td>{
                            item.hocPhanTienQuyet ? item.hocPhanTienQuyet.tenHocPhan : "Không có"
                            }</td>
                          
                            
                          {/* Các cột thông tin học phần */}
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
                    {dataLophocphan
                      .filter((item) => item.hocPhan.maHocPhan === selectedMonHoc)
                      .map((item, index) => (
                        <tr key={item.maLopHocPhan} className="form-table">
                          <td>
                            {/* radio */}
                            <input
                              type="radio"
                              name="lophocphan"
                              id="lophocphan"
                              value={item.maLopHocPhan}
                              onChange={(e) => setSelectedLopHocPhan(e.target.value)}
                            />
                          </td>
                          <td>{index + 1}</td>
                          <td>{item.maLopHocPhan}</td>
                          <td>{item.hocPhan.tenHocPhan}</td>
                          <td>{item.lopDuKien}</td>
                          <td>{item.siSoToiDa}</td>
                          <td>{item.daDangKy}</td>
                          <td>{item.trangThai}</td>
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
                    {dataChiTietHocPhan
                    .filter(
                      (item) => item.lopHocPhan.maLopHocPhan === selectedLopHocPhan
                    )
                    .map((item, index) => (
                      <tr key={item.maChiTietHocPhan} className="form-table">
                        {/* input radio */}
                        <td>
                          <input type="radio" name="chitiet" id="chitiet" />
                        </td>
                        <td>{index + 1}</td>
                        <td>
                          Thứ {item.thu} - {item.tiet}
                        </td>
                        <td></td>
                        <td>{item.dayNha}</td>
                        <td>{item.lopHocPhan.giangVien.maGiangVien}</td>
                        <td>
                          {moment(item.thoiGianBD).format("DD/MM/YYYY HH:mm")}
                          <br />
                          {moment(item.thoiGianKT).format("DD/MM/YYYY HH:mm")}
                        
                        </td>
                        
                        <td>
                          <Button onClick={handleShow}>Xem</Button>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            className="form-modal"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>THÔNG TIN GIẢNG VIÊN</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div>
                                <div className="title-model">
                                  {item.giangvien}
                                </div>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-ttgv">
                                      <label>Mã nhân sự: </label>
                                      <span>{item.lopHocPhan.giangVien.maGiangVien}</span>
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
                                      <span>
                                        {item.lopHocPhan.giangVien.ngaySinh}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-ttgv">
                                      <label>Nơi sinh: </label>
                                      <span>
                                        {item.lopHocPhan.giangVien.diaChi}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-ttgv">
                                      <label>Chức vụ: </label>
                                      <span id="giangvien" name="giangvien">
                                        Giảng viên
                                      </span>
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
                  <Button
                    style={{ marginTop: "13px", marginBottom: "10px" }}
                    variant="btn btn-warning"
                    onClick={handleDangKyLopHocPhan}
                  >
                    Đăng ký môn học
                  </Button>
                </div>
                <div className="title-dkhp">
                  <h1>LỚP HỌC PHẦN CHỜ ĐĂNG KÝ</h1>

                  <div className="box-monhocphan">
                    <button
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        float: "right",
                        marginBottom: "10px",
                      }}
                      onClick={handlePrint}
                    >
                      Print
                    </button>
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
                        {dataLopHocPhanDaDangKy
                        .filter((item) => item.lopHocPhan.hocKy.maHocKy === selectedHocKy && item.sinhVien.maSinhVien === maSinhVien)
                        .map((item, index) => (
                          <tr key={item.maDangKy} className="form-table">
                            <td>
                              <Button variant="btn btn-warning"
                                onClick={() => handleDeleteMonHoc(item.maDangKy)}
                              
                              >Hủy</Button>
                            </td>
                            <td>{index + 1}</td>
                            <td>{item.lopHocPhan.maLopHocPhan}</td>
                            <td>{item.lopHocPhan.hocPhan.tenHocPhan}</td>
                            <td>{item.lopHocDuKien}</td>
                            <td>{item.lopHocPhan.hocPhan.soTinChi}</td>
                            <td>{item.hocPhi}</td>
                            <td>
                              {moment(item.hanNop).format("DD/MM/YYYY")}
                            </td>
                            <td>{item.thu}</td>
                            <td>{item.trangThaiDangKy}</td>
                            <td>
                              {moment(item.ngayDangKy).format("DD/MM/YYYY")}
                              </td>
                            <td>{item.trangThaiLHP}</td>
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
