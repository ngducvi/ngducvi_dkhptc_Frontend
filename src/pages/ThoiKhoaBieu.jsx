import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import Menusv from "../components/menusv";
import Menugv from "../components/menugv";
import { getAllChiTietHocPhan } from "../services/chiTietHocPhanService";
import { useNavigate, useLocation } from "react-router-dom";
import { getSinhVienByMaSinhVien } from "../services/sinhVienService";
import { getDanhSachLopHocPhanDaDangKyBySinhVien } from "../services/lopHocPhanDaDangKyService";
// import {getAllChiTietHocPhan} from "../services/chiTietHocPhanService";
import { getAllLopHocPhan } from "../services/lopHocPhanService";
import {
  dangKyLopHocPhan,
  getAllLopHocPhanDaDangKy,
  deleteMonHoc,
} from "../services/lopHocPhanDaDangKyService";
export default function ThoiKhoaBieu() {
  const [sinhVien, setSinhVien] = useState({});
  const [lopHocPhanDaDangKys, setLopHocPhanDaDangKys] = useState([]);

  // get danh sach lop hoc phan da dang ky by sinh vien
  useEffect(() => {
    const fetchLopHocPhanDaDangKys = async () => {
      const data = await getDanhSachLopHocPhanDaDangKyBySinhVien(maSinhVien);
      setLopHocPhanDaDangKys(data);
    };
    fetchLopHocPhanDaDangKys();
  }, [sinhVien]);
  console.log(lopHocPhanDaDangKys);
  const maLopHocPhanDaDangKy = lopHocPhanDaDangKys.map(
    (item) => item.lopHocPhan.maLopHocPhan
  );
  console.log(maLopHocPhanDaDangKy);
  const maSinhVien = localStorage.getItem("maSinhVien");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);
  useEffect(() => {
    setWeekDates(getWeekDates(selectedDate));
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  // get sinh vien by maSinhVien
  useEffect(() => {
    const fetchSinhVien = async () => {
      const sinhVien = await getSinhVienByMaSinhVien(maSinhVien);
      setSinhVien(sinhVien);
    };
    fetchSinhVien();
  }, [maSinhVien]);
  // get all chi tiet hoc phan
  const [chiTietHocPhans, setChiTietHocPhans] = useState([]);

  useEffect(() => {
    const fetchChiTietHocPhans = async () => {
      const allChiTietHocPhans = await getAllChiTietHocPhan();
      const filteredChiTietHocPhans = allChiTietHocPhans.filter(
        (chiTietHocPhan) => {
          return (
            chiTietHocPhan.lopHocPhan.hocKy?.maHocKy === "11" &&
            chiTietHocPhan.lopHocPhan.hocKy?.namHoc?.namHoc === "2024-2025"
          );
        }
      );
      setChiTietHocPhans(filteredChiTietHocPhans);
    };
    fetchChiTietHocPhans();
  }, []);

  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    startOfWeek.setDate(diff);

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const weekDate = new Date(startOfWeek);
      weekDate.setDate(startOfWeek.getDate() + i);
      dates.push(weekDate);
    }
    return dates;
  };

  const datatkbs = chiTietHocPhans;

  const startOfWeek = weekDates[0];
  const endOfWeek = weekDates[6];

  const filteredData = datatkbs.filter((tkb) => {
    const tkbStartDate = new Date(tkb.thoiGianBD);
    const tkbEndDate = new Date(tkb.thoiGianKT);
    return (
      (tkbStartDate <= endOfWeek && tkbEndDate >= startOfWeek) ||
      (tkbStartDate >= startOfWeek && tkbStartDate <= endOfWeek)
    );
  });


  const renderTableCell = (dayIndex, period) => {
    const entry = filteredData.find(
      (tkb) => tkb.thu === dayIndex + 2 && tkb.tiet === period
    );
    if (entry) {
      const matchingLopHocPhan = lopHocPhanDaDangKys.find(
        (lopHocPhan) =>
          lopHocPhan.lopHocPhan?.maLopHocPhan === entry.lopHocPhan?.maLopHocPhan
      );
      if (matchingLopHocPhan) {
        return (
          <td key={period}>
            <b>Mã lớp học phần:</b> {entry.lopHocPhan?.maLopHocPhan}
            {console.log(entry.lopHocPhan?.maLopHocPhan)}
            <br />
            <b>Tên lớp học phần: </b>
            {entry.lopHocPhan?.tenLopHocPhan}
            <br />
            <b>Phòng học:</b>
            <br />
            <b>Dãy nhà:</b> {entry.dayNha}
            <br />
            <b>Giảng viên:</b> {entry.lopHocPhan?.giangVien?.maGiangVien}
            <br />
            <b>Nhóm thực hành:</b> {entry.nhomThucHanh}
          </td>
        );
      } else {
        return <td key={period}></td>;
      }
    } else {
      return <td key={period}></td>;
    }
  };

  const renderRowsForPeriod = (period) => {
    return (
      <tr role="row">
        <td>
          <b>{period === 1 ? "Sáng" : period === 2 ? "Chiều" : "Tối"}</b>
        </td>
        {weekDates.map((_, dayIndex) => renderTableCell(dayIndex, period))}
      </tr>
    );
  };

  return (
    <div className="container-qlcn">
      <div className="row">
        <div className="col-md-2">
          {/* nếu mã bắt đầu là SV thì hiện Menusv nếu là GV thì hiện Menu gv */}
          {maSinhVien.startsWith("SV") ? <Menusv /> : <Menugv />}
        </div>
        <div className="col-md-10 col-xs-12">
          <div className="box-df-menu">
            <div className="form-dk-tkb">
              <div className="portlet-title-tkb">
                <div className="caption-tkb">
                  <span>Lịch học theo tuần</span>
                </div>
                <div className="actions-tkb">
                  <input
                    id="datepicker"
                    className="k-input"
                    placeholder="Chọn tuần"
                    type="date"
                    value={selectedDate.toISOString().split("T")[0]} // Convert date to yyyy-MM-dd format
                    onChange={handleDateChange}
                  />
                </div>
              </div>
              <div className="viewLichHocTheoTuan">
                <div className="table-responsive">
                  <table className="fl-table table table-bordered text-center no-footer dtr-inline">
                    <thead>
                      <tr role="row">
                        <th>Ca học</th>
                        {weekDates.map((date, index) => (
                          <th key={index}>
                            <span lang="lichhoctheotuan-cahoc">
                              Thứ {index + 2}
                            </span>
                            <br />
                            <span lang="lichhoctheotuan-ngay">
                              {date.toLocaleDateString("vi-VN")}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {renderRowsForPeriod(1)}
                      {renderRowsForPeriod(2)}
                      {renderRowsForPeriod(3)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
