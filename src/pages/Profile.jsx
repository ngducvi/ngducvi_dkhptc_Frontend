import React, { useState, useEffect } from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import moment from 'moment';
export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    // Kiểm tra xem location.state và location.state.sinhVien đã được thiết lập chưa
    if (location.state && location.state.sinhVien) {
      setUser(location.state.sinhVien);
    }
  }, [location]);
  console.log(user.maSinhVien);

  return (
    
    <div className="container-profile">
      <div className="main-section-content">
        <div className="row">
          <div className="col-md-2 hidden-xs">
            {/* Menu */}
            <div className="box-df">
              <div className="accordion-menu">
                <ul>
                  <li>
                    <a href="/home">
                      <span>Trang chủ</span>
                    </a>
                  </li>
                  <li>
                    <a href="
                    /dangkyhocphan
                    ">
                      <span>Đăng ký học phần</span>
                    </a>
                  </li>
                  <li>
                    <a href="/thoikhoabieu">
                      <span>Lịch Học</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/xemdiem">
                      <span>Xem điểm</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/chuongtrinhkhung">
                      <span>Chươn trình khung</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-xs-12">
            <div className="box-df">
              <div className="row">
                <div className="col-md-3">
                  <div className="portlet">
                    <div className="portlet portlet-body light">
                      <div className="profile-userpic">
                        <img
                          src="https://bootdey.com/img/Content/user_1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                        <br />
                      </div>
                      <div className="form-group">
                        <div className="control-label">
                          <span>MSSV: </span>
                          <b>{user.maSinhVien}</b>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="control-label">
                          <span>Họ tên: </span>
                          <b>{user.hoTen}</b>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* gioi tinh */}
                        <div className="control-label">
                          <span>Giới tính: </span>
                          <b>
                            {user.gioiTinh === "NAM" ? "Nam" : "Nữ"}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="portlet">
                    <div class="portlet-title">
                      <div class="caption">
                        <span
                          class="caption-subject  bold"
                          lang="thongtinsinhvien-thongtinhocvan"
                        >
                          Thông tin học vấn
                        </span>
                      </div>
                    </div>
                    <div class="portlet-body">
                      <div class="col-md-12">
                        <form class="form-horizontal">
                          <div class="form-body">
                            <div class="form-group">
                              <label class="col-md-3">
                                <span lang="thongtinsinhvien-trangthai">
                                  Trạng thái
                                </span>
                                : <span class="bold">Đang học</span>
                              </label>
                              <label class="col-md-3">
                                <span lang="thongtinsinhvien-mahoso">
                                  Mã hồ sơ
                                </span>
                                : <span class="bold">20NV117899651</span>
                              </label>
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-ngayvaotruong">
                                  Ngày vào trường
                                </span>
                                : <span class="bold">10/10/2020</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-lophoc">
                                  Lớp học
                                </span>
                                : <span class="bold">
                                  {user.lopHoc ? user.lopHoc : "20DTHA1"}
                                </span>
                              </label>
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-coso">Cơ sở</span>:{" "}
                                <span class="bold">
                                  Cơ sở 1 (Thành phố Hồ Chí Minh)
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-bacdaotao">
                                  Bậc đào tạo
                                </span>
                                : <span class="bold">
                                  {user.bacDaoTao ? user.bacDaoTao : "Đại học"}
                                </span>
                              </label>
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-loaidaotao">
                                  Loại hình đào tạo
                                </span>
                                : <span class="bold">Tiên tiến</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-khoa">Khoa</span>:{" "}
                                <span class="bold">
                                  Khoa Công nghệ Thông tin
                                </span>
                              </label>
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-nganh">Ngành</span>
                                : <span class="bold">Kỹ thuật phần mềm </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-chuyennganh">
                                  Chuyên ngành
                                </span>
                                :{" "}
                                <span class="bold">
                                  Kỹ thuật phần mềm - 7480103
                                </span>
                              </label>
                              <label class="col-md-6">
                                <span lang="thongtinsinhvien-khoahoc">
                                  Khóa học
                                </span>
                                : <span class="bold">2020 - 2021</span>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="portlet">
                    <div class="portlet portlet-title light">
                      <div class="caption">
                        <span
                          class="caption-subject bold"
                          lang="thongtinsinhvien-thongtincanhan"
                        >
                          Thông tin cá nhân
                        </span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="portlet portlet-body light">
                      <div class="form-horizontal">
                        <div class="form-body">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-ngaysinh">
                                  Ngày sinh
                                </span>
                                : <span class="bold">
                                {moment(user.ngaySinh).format('DD-MM-YYYY')}
                                </span>
                              </label>
                              <label class="col-md-2 col-xs-12">
                                <span lang="thongtinsinhvien-dantoc">
                                  Dân tộc
                                </span>
                                : <span class="bold">
                                  {user.danToc ? user.danToc.tenDanToc : ""}
                                </span>
                              </label>
                              <label class="col-md-3 col-xs-12">
                                <span lang="thongtinsinhvien-tongiao">
                                  Tôn giáo
                                </span>
                                : <span class="bold">
                                  {user.tonGiao ? user.tonGiao.tenTonGiao : ""}
                                </span>
                              </label>
                              <label class="col-md-3 col-xs-12">
                                <span lang="thongtinsinhvien-khuvuc">
                                  Khu vực
                                </span>
                                : <span class="bold">
                                  {user.maKhuVuc ? user.maKhuVuc : ""}
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-socmnd">
                                  Số CCCD
                                </span>
                                : <span class="bold">
                                  {user.soCCCD ? user.soCCCD : ""}
                                </span>
                              </label>
                              <label class="col-md-2 col-xs-12">
                                <span lang="thongtinsinhvien-ngaycap">
                                  Ngày cấp
                                </span>
                                : <span class="bold">27/08/2019</span>
                              </label>
                              <label class="col-md-6 col-xs-12">
                                <span lang="thongtinsinhvien-noicap">
                                  Nơi cấp
                                </span>
                                :{" "}
                                <span class="bold">Thành phố Hồ Chí Minh</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-6">
                                <span lang="thongtinsinhvien-doituong">
                                  Đối tượng
                                </span>
                                : <span class="bold">
                                  {user.maKhuVuc ? user.maKhuVuc : ""}
                                </span>
                              </label>
                              <label class="col-md-8 col-xs-6">
                                <span lang="thongtinsinhvien-dienchinhsach">
                                  Diện chính sách
                                </span>
                                : <span class="bold"></span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-6">
                                <span lang="thongtinsinhvien-ngayvaodoan">
                                  Ngày vào Đoàn
                                </span>
                                : <span class="bold"></span>
                              </label>
                              <label class="col-md-8 col-xs-6">
                                <span lang="thongtinsinhvien-ngayvaodang">
                                  Ngày vào Đảng
                                </span>
                                : <span class="bold"></span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-6">
                                <span lang="thongtinsinhvien-sdt">
                                  Điện thoại
                                </span>
                                : <span class="bold">
                                  {user.soDienThoai ? user.soDienThoai : ""}
                                </span>
                              </label>
                              <label class="col-md-8 col-xs-6">
                                <span lang="thongtinsinhvien-email">Email</span>
                                : <span class="bold">
                                  {user.gmail ? user.gmail : ""}
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-diachilienlac">
                                  Địa chỉ liên hệ
                                </span>
                                :{" "}
                                <span class="bold">
                                  {user.diaChi ? user.diaChi : ""}
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-noisinh">
                                  Nơi sinh
                                </span>
                                : <span class="bold">
                                  {user.hoKhauThuongTru
                                    ? user.hoKhauThuongTru
                                    : ""}
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-hktt">
                                  Hộ khẩu thường trú
                                </span>
                                :{" "}
                                <span class="bold">
                                  {user.hoKhauThuongTru
                                    ? user.hoKhauThuongTru
                                    : ""}
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-md-12">
                  <div class="portlet">
                    <div class="portlet portlet-title light">
                      <div class="caption">
                        <span
                          class="caption-subject  bold"
                          lang="thongtinsinhvien-qhgd"
                        >
                          Quan hệ gia đình
                        </span>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="portlet portlet-body light">
                      <div class="col-md-12">
                        <div class="form-horizontal">
                          <div class="form-body">
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdhotencha">
                                  Họ tên Cha
                                </span>
                                : <span class="bold"> Nguyễn Đức Nhiên</span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdnamsinh">
                                  Năm sinh
                                </span>
                                : <span class="bold"> 03/09/1970</span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdnghenghiep">
                                  Nghề nghiệp
                                </span>
                                : <span class="bold"> Nông</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-quoctich">
                                  Quốc tịch
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-dantoc">
                                  Dân tộc
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-tongiao">
                                  Tôn giáo
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-coquan">
                                  Cơ quan công tác
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-chucvu">
                                  Chức vụ
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdsdt">
                                  Số điện thoại
                                </span>
                                : <span class="bold">0905326355 </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-hokhau">
                                  Hộ khẩu
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-diachihiennay">
                                  Chỗ ở hiện nay
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdhotenme">
                                  Họ tên Mẹ
                                </span>
                                : <span class="bold"> Nguyễn Thị Nhi</span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdnamsinh">
                                  Năm sinh
                                </span>
                                : <span class="bold"> 27/041974</span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdnghenghiep">
                                  Nghề nghiệp
                                </span>
                                : <span class="bold"> Nông</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-quoctich">
                                  Quốc tịch
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-dantoc">
                                  Dân tộc
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-tongiao">
                                  Tôn giáo
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-coquan">
                                  Cơ quan công tác
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-chucvu">
                                  Chức vụ
                                </span>
                                : <span class="bold"> </span>
                              </label>
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-gdsdt">
                                  Số điện thoại
                                </span>
                                : <span class="bold">0979381392 </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-hokhau">
                                  Hộ khẩu
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-diachihiennay">
                                  Chỗ ở hiện nay
                                </span>
                                : <span class="bold"> </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
