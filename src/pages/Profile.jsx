import React, { useState, useEffect } from "react";

export default function Profile() {
  //   MaSinhVien NVARCHAR(10) PRIMARY KEY,
  //   HoTen NVARCHAR(255),
  // Gmail NVARCHAR(255),
  // HoKhauThuongTru NVARCHAR(255),
  // MaKhuVuc NVARCHAR(255),
  // SoCCCD NVARCHAR(255),
  // SoDienThoai NVARCHAR(255),
  //   NgaySinh DATE,
  //   DiaChi NVARCHAR(255),
  // GioiTinh  NVARCHAR(255),
  // BacDaoTao NVARCHAR(255),
  // LopHoc NVARCHAR(255),
  // LoaiHinhDaoTao NVARCHAR(255),
  // MaChuyenNganh NVARCHAR(10),
  // FOREIGN KEY (MaChuyenNganh) REFERENCES ChuyenNganh(MaChuyenNganh),
  // MaKhoa NVARCHAR(10),
  // FOREIGN KEY (MaKhoa) REFERENCES Khoa(MaKhoa),
  // MaTrangThai NVARCHAR(10),
  // FOREIGN KEY (MaTrangThai) REFERENCES TrangThaiHocTap(MaTrangThai),
  // MaTonGiao NVARCHAR(10),
  // FOREIGN KEY (MaTonGiao) REFERENCES TonGiao(MaTonGiao),
  // MaDanToc NVARCHAR(10),
  // FOREIGN KEY (MaDanToc) REFERENCES DanToc(MaDanToc),
  const datasinhvien = [
    {
      MaSinhVien: "SV001",
      HoTen: "Nguyễn Văn Vĩ",
      Gmail: "nguyenvana@gmail.com",
      HoKhauThuongTru: "Hà Nội",
      MaKhuVuc: "KV001",
      SoCCCD: "123456789",
      SoDienThoai: "0987654321",
      NgaySinh: "1990-01-01",
      DiaChi: "123 Đường ABC, Quận XYZ, TP. Hà Nội",
      GioiTinh: "Nam",
      BacDaoTao: "Đại học",
      LopHoc: "18CTT1",
      LoaiHinhDaoTao: "Chính quy",
      MaChuyenNganh: "CN1",
      MaKhoa: "K1",
      MaTrangThai: "TT1",
      MaTonGiao: "TG1",
      MaDanToc: "DT1",
    },
    // Thêm các dữ liệu sinh viên khác vào đây
  ];
 
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
                    <a href="/">
                      <span>Trang chủ</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>Đăng ký học phần</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>Lịch Học</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
                      <span>Xem điểm</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
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
                          <b>20114391</b>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="control-label">
                          <span>Họ tên: </span>
                          <b>Nguyễn Đức Vĩ</b>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* gioi tinh */}
                        <div className="control-label">
                          <span>Giới tính: </span>
                          <b>Nam</b>
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
                                : <span class="bold">DHKTPM16GTT</span>
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
                                : <span class="bold">Đại học</span>
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
                                : <span class="bold">14/09/2002</span>
                              </label>
                              <label class="col-md-2 col-xs-12">
                                <span lang="thongtinsinhvien-dantoc">
                                  Dân tộc
                                </span>
                                : <span class="bold">Kinh</span>
                              </label>
                              <label class="col-md-3 col-xs-12">
                                <span lang="thongtinsinhvien-tongiao">
                                  Tôn giáo
                                </span>
                                : <span class="bold"></span>
                              </label>
                              <label class="col-md-3 col-xs-12">
                                <span lang="thongtinsinhvien-khuvuc">
                                  Khu vực
                                </span>
                                : <span class="bold">Khu vực 1</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-4 col-xs-12">
                                <span lang="thongtinsinhvien-socmnd">
                                  Số CCCD
                                </span>
                                : <span class="bold">242002047</span>
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
                                : <span class="bold"></span>
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
                                : <span class="bold">0384754154</span>
                              </label>
                              <label class="col-md-8 col-xs-6">
                                <span lang="thongtinsinhvien-email">Email</span>
                                : <span class="bold">ngducvicc@gmail.com</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-diachilienlac">
                                  Địa chỉ liên hệ
                                </span>
                                :{" "}
                                <span class="bold">
                                  Nguyễn Đức Vĩ (0384754154) 39 Hòa Trung, xã Ea
                                  Bông, huyện Krông Ana, tỉnh Đắk Lắk
                                </span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-noisinh">
                                  Nơi sinh
                                </span>
                                : <span class="bold">Tỉnh Đắk Lắk</span>
                              </label>
                            </div>
                            <div class="form-group">
                              <label class="col-md-12 col-xs-12">
                                <span lang="thongtinsinhvien-hktt">
                                  Hộ khẩu thường trú
                                </span>
                                :{" "}
                                <span class="bold">
                                  39, thôn Hòa Trung, Xã Ea Bông, Huyện Krông A
                                  Na, Tỉnh Đắk Lắk
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
