import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import Menusv from "../components/menusv";
import Menugv from "../components/menugv";
export default function ThoiKhoaBieu() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    setWeekDates(getWeekDates(selectedDate));
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

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

  const datatkbs = [
    {
      MaChiTietHocPhan: "CTHP01",
      TenLHP : "Lập trình web",
      MaLopHocPhan: "LHP01",
      Thu: 2,
      Tiet: 1,
      Tuan: 1,
      Thang: 1,
      NhomThucHanh: "NTH01",
      PhongHoc: "PH01",
      DayNha: "DN01",
      MaGiangVien: "GV01",
      ThoiGianBD: "2023-12-01T07:30:00",
      ThoiGianKT: "2024-03-01T08:30:00",
    },
    {
      MaChiTietHocPhan: "CTHP02",
      TenLHP : "Lập trình JAVA",
      MaLopHocPhan: "LHP01",
      Thu: 3,
      Tiet: 2,
      Tuan: 1,
      Thang: 1,
      NhomThucHanh: "NTH01",
      PhongHoc: "PH01",
      DayNha: "DN01",
      MaGiangVien: "GV01",
      ThoiGianBD: "2023-12-01T07:30:00",
      ThoiGianKT: "2024-03-01T08:30:00",
    },
    {
      MaChiTietHocPhan: "CTHP03",
      TenLHP : "Lập trình C++ ",
      MaLopHocPhan: "LHP01",
      Thu: 4,
      Tiet: 3,
      Tuan: 1,
      Thang: 1,
      NhomThucHanh: "NTH01",
      PhongHoc: "PH01",
      DayNha: "DN01",
      MaGiangVien: "GV01",
      ThoiGianBD: "2023-12-01T07:30:00",
      ThoiGianKT: "2024-03-01T08:30:00",
    },
  ];

  const startOfWeek = weekDates[0];
  const endOfWeek = weekDates[6];

  const filteredData = datatkbs.filter((tkb) => {
    const tkbStartDate = new Date(tkb.ThoiGianBD);
    const tkbEndDate = new Date(tkb.ThoiGianKT);
    return (
      (tkbStartDate <= endOfWeek && tkbEndDate >= startOfWeek) ||
      (tkbStartDate >= startOfWeek && tkbStartDate <= endOfWeek)
    );
  });

  const renderTableCell = (dayIndex, period) => {
    const entry = filteredData.find(
      (tkb) => tkb.Thu === dayIndex + 2 && tkb.Tiet === period
    );
    if (entry) {
      return (
        <td key={period}>
          <b>Mã lớp học phần:</b> {entry.MaLopHocPhan}
          <br />
          <b>Tên lớp học phần: </b>
          {entry.TenLHP}
          <br />
          <b>Phòng học:</b> {entry.PhongHoc}
          <br />
          <b>Dãy nhà:</b> {entry.DayNha}
          <br />
          <b>Giảng viên:</b> {entry.MaGiangVien}
          <br />
          <b>Nhóm thực hành:</b> {entry.NhomThucHanh}
          
        </td>
      );
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
          <Menu />
          {/*  */}
          <Menusv />
          <Menugv />
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
                            <span lang="lichhoctheotuan-cahoc">Thứ {index + 2}</span>
                            <br />
                            <span lang="lichhoctheotuan-ngay">{date.toLocaleDateString("vi-VN")}</span>
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
