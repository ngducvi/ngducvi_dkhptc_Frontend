import React from "react";
import { Button } from "react-bootstrap";
import Menu from "../components/menu";
export default function QLSV() {
  const datasv = [
    {
      MaSinhVien: "B17DCCN001",
      HoTen: "Nguyễn Văn A",
      Gmail: "ngducvicc@gmail.com",
      HoKhauThuongTru: "Hà Nội",
      MaKhuVuc: "KV1",
      SoCCCD: "123456789",
      SoDienThoai: "0123456789",
      NgaySinh: "01/01/2000",
      DiaChi: "Hà Nội",
      GioiTinh: "Nam",
      BacDaoTao: "Đại học",
      LopHoc: "D17CQCN01",
      LoaiHinhDaoTao: "Chính quy",
      MaChuyenNganh: "CNTT",
      MaKhoa: "CNTT",
      MaTrangThai: "Đang học",
      MaTonGiao: "Không",
      MaDanToc: "Kinh",
    },
    {
      MaSinhVien: "B17DCCN002",
      HoTen: "Nguyễn Văn B",
      Gmail: "B@gmail.com",
      HoKhauThuongTru: "Hà Nội",
      MaKhuVuc: "KV1",
      SoCCCD: "123456789",
      SoDienThoai: "0123456789",
      NgaySinh: "01/01/2000",
      DiaChi: "Hà Nội",
      GioiTinh: "Nam",
      BacDaoTao: "Đại học",
      LopHoc: "D17CQCN01",
      LoaiHinhDaoTao: "Chính quy",
      MaChuyenNganh: "CNTT",
      MaKhoa: "CNTT",
      MaTrangThai: "Đang học",
      MaTonGiao: "Không",
      MaDanToc: "Kinh",
    },
  ];
  const datakhuvuc = [
    {
      MaKhuVuc: "KV1",
      TenKhuVuc: "Khu vực 1",
    },
    {
      MaKhuVuc: "KV2",
      TenKhuVuc: "Khu vực 2",
    },
    {
      MaKhuVuc: "KV3",
      TenKhuVuc: "Khu vực 3",
    },
  ];
  const gioitinh = [
    {
      MaGioiTinh: "Nam",
      TenGioiTinh: "Nam",
    },
    {
      MaGioiTinh: "Nữ",
      TenGioiTinh: "Nữ",
    },
  ];
  const databacdaotao = [
    {
      MaBacDaoTao: "Đại học",
      TenBacDaoTao: "Đại học",
    },
    {
      MaBacDaoTao: "Cao đẳng",
      TenBacDaoTao: "Cao đẳng",
    },
  ];
  const dataloaihinhdaotao = [
    {
      MaLoaiHinhDaoTao: 0,
      TenLoaiHinhDaoTao: "Chính quy",
    },
    {
      MaLoaiHinhDaoTao: 1,
      TenLoaiHinhDaoTao: "Tiên tiến",
    },
  ];
  const datachuyennganh = [
    {
      MaChuyenNganh: "CNTT",
      TenChuyenNganh: "Công nghệ thông tin",
    },
    {
      MaChuyenNganh: "MMT",
      TenChuyenNganh: "Mạng máy tính",
    },
  ];
  const datakhoa = [
    {
      MaKhoa: "CNTT",
      TenKhoa: "Công nghệ thông tin",
    },
    {
      MaKhoa: "MMT",
      TenKhoa: "Mạng máy tính",
    },
  ];
  const datatrongthai = [
    {
      MaTrangThai: "Đang học",
      TenTrangThai: "Đang học",
    },
    {
      MaTrangThai: "Nghỉ học",
      TenTrangThai: "Nghỉ học",
    },
  ];
  const datatongiao = [
    {
      MaTonGiao: "Không",
      TenTonGiao: "Không",
    },
    {
      MaTonGiao: "Phật giáo",
      TenTonGiao: "Phật giáo",
    },
  ];
  const datadantoc = [
    {
      MaDanToc: "Kinh",
      TenDanToc: "Kinh",
    },
    {
      MaDanToc: "Mường",
      TenDanToc: "Mường",
    },
  ];

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          <Menu></Menu>
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div className="title-qlsv">
              <h3>QUẢN LÝ SINH VIEN</h3>
              <div className="form-dk">
                <div className="formgroup">
                  <label htmlFor="">Mã Sinh viên</label>
                  <input type="text" />
                </div>
                <div className="formgroup">
                  <label htmlFor="">Tên sinh viên</label>
                  <input type="text" />
                </div>
                {/* Theo lớp */}
                <div className="formgroup">
                  <label htmlFor="">Mã Lớp</label>
                  <select name="" id="">
                   
                  </select>
                </div>
                <div className="formgroup">
                  <label htmlFor="">Mã Chuyên ngành</label>
                  <select name="" id="">
                    {datachuyennganh.map((item, index) => (
                      <option value={item.MaChuyenNganh}>
                        {item.MaChuyenNganh}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="formgroup">
                  <label htmlFor="">Mã Khoa</label>
                  <select name="" id="">
                    {datakhoa.map((item, index) => (
                      <option value={item.MaKhoa}>{item.MaKhoa}</option>
                    ))}
                  </select>
                  </div>
              </div>
              <div className="form-addchuyennganh">
                <form>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="col-md-12">
                        <label htmlFor="">Mã sinh viên: </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mã sinh viên"
                          id="maSinhVien"
                          name="maSinhVien"
                          // không cho nhập
                          disabled
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Tên sinh viên: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mã sinh viên"
                        id="tenSinhVien"
                        name="tenSinhVien"
                      />
                    </div>
                    {/* Gmail	Hộ khẩu thường trú	Mã khu vực	Số CCCD	Số điện thoại	Ngày sinh	Địa chỉ	Giới tính	Bậc đào tạo	Lớp học	Loại hình đào tạo	Mã chuyên ngành	Mã khoa	Mã trạng thái	Mã tôn giáo	Mã dân tộc */}
                    <div className="col-md-3">
                      <label htmlFor="">Gmail: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gmail"
                        id="gmail"
                        name="gmail"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Hộ khẩu thường trú: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Hộ khẩu thường trú"
                        id="hoKhauThuongTru"
                        name="hoKhauThuongTru"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã khu vực: </label>
                      <select
                        className="form-select"
                        id="maKhuVuc"
                        name="maKhuVuc"
                      >
                        {datakhuvuc.map((item, index) => (
                          <option value={item.MaKhuVuc}>
                            {item.TenKhuVuc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Số CCCD: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số CCCD"
                        id="soCCCD"
                        name="soCCCD"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Số điện thoại: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số điện thoại"
                        id="soDienThoai"
                        name="soDienThoai"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Ngày sinh: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ngày sinh"
                        id="ngaySinh"
                        name="ngaySinh"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Địa chỉ: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Địa chỉ"
                        id="diaChi"
                        name="diaChi"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Giới tính: </label>
                      <select
                        className="form-select"
                        id="gioiTinh"
                        name="gioiTinh"
                      >
                        {gioitinh.map((item, index) => (
                          <option value={item.MaGioiTinh}>
                            {item.TenGioiTinh}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Bậc đào tạo: </label>
                      <select
                        className="form-select"
                        id="bacDaoTao"
                        name="bacDaoTao"
                      >
                        {databacdaotao.map((item, index) => (
                          <option value={item.MaBacDaoTao}>
                            {item.TenBacDaoTao}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Lớp học: </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lớp học"
                        id="lopHoc"
                        name="lopHoc"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Loại hình đào tạo: </label>
                      <select
                        className="form-select"
                        id="loaiHinhDaoTao"
                        name="loaiHinhDaoTao"
                      >
                        {dataloaihinhdaotao.map((item, index) => (
                          <option value={item.MaLoaiHinhDaoTao}>
                            {item.TenLoaiHinhDaoTao}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Chuyên ngành: </label>
                      <select
                        className="form-select"
                        id="maChuyenNganh"
                        name="maChuyenNganh"
                      >
                        {datachuyennganh.map((item, index) => (
                          <option value={item.MaChuyenNganh}>
                            {item.MaChuyenNganh}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Khoa: </label>
                      <select className="form-select" id="maKhoa" name="maKhoa">
                        {datakhoa.map((item, index) => (
                          <option value={item.MaKhoa}>{item.TenKhoa}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Trạng thái: </label>
                      <select
                        className="form-select"
                        id="maTrangThai"
                        name="maTrangThai"
                      >
                        {datatrongthai.map((item, index) => (
                          <option value={item.MaTrangThai}>
                            {item.TenTrangThai}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Tôn giáo: </label>
                      <select
                        className="form-select"
                        id="maTonGiao"
                        name="maTonGiao"
                      >
                        {datatongiao.map((item, index) => (
                          <option value={item.MaTonGiao}>
                            {item.TenTonGiao}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="">Mã Dân tộc: </label>
                      <select
                        className="form-select"
                        id="maDanToc"
                        name="maDanToc"
                      >
                        {datadantoc.map((item, index) => (
                          <option value={item.MaDanToc}>
                            {item.TenDanToc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <Button variant="primary">Thêm</Button>
                    <Button variant="success">Lưu</Button>
                    <Button variant="danger">Hủy</Button>
                  </div>
                </form>
              </div>
              <div className="box-monhocphan">
                <table className="table-form">
                  <thead>
                    <tr>
                      <th>Mã sinh viên</th>
                      <th>Họ tên</th>
                      <th>Gmail</th>
                      <th>Hộ khẩu thường trú</th>
                      <th>Mã khu vực</th>
                      <th>Số CCCD</th>
                      <th>Số điện thoại</th>
                      <th>Ngày sinh</th>
                      <th>Địa chỉ</th>
                      <th>Giới tính</th>
                      <th>Bậc đào tạo</th>
                      <th>Lớp học</th>
                      <th>Loại hình đào tạo</th>
                      <th>Mã chuyên ngành</th>
                      <th>Mã khoa</th>
                      <th>Mã trạng thái</th>
                      <th>Mã tôn giáo</th>
                      <th>Mã dân tộc</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datasv.map((item, index) => (
                      <tr key={index}>
                        <td>{item.MaSinhVien}</td>
                        <td>{item.HoTen}</td>
                        <td>{item.Gmail}</td>
                        <td>{item.HoKhauThuongTru}</td>
                        <td>{item.MaKhuVuc}</td>
                        <td>{item.SoCCCD}</td>
                        <td>{item.SoDienThoai}</td>
                        <td>{item.NgaySinh}</td>
                        <td>{item.DiaChi}</td>
                        <td>{item.GioiTinh}</td>
                        <td>{item.BacDaoTao}</td>
                        <td>{item.LopHoc}</td>
                        <td>{item.LoaiHinhDaoTao}</td>
                        <td>{item.MaChuyenNganh}</td>
                        <td>{item.MaKhoa}</td>
                        <td>{item.MaTrangThai}</td>
                        <td>{item.MaTonGiao}</td>
                        <td>{item.MaDanToc}</td>
                        <td>
                          <Button variant="primary">Sửa</Button>
                          <Button variant="danger">Xóa</Button>
                        </td>
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
  );
}
