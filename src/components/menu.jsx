import React from 'react'

export default function menu() {
  return (
    <div>
        <div className="box-df-menu">
            <div className="accordion-menu">
              <ul>
                <li>
                  <a href="/homenv">
                    <span>Trang chủ</span>
                  </a>
                </li>
                <li>
                  <a href="/qlsv">
                    <span>Quản lý Sinh vien</span>
                  </a>
                </li>
                <li>
                  <a href="/qlkhoa">
                    <span>Quản lý Khoa</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/qlchuyennganh">
                    <span>Quản lý Chuyên nghành</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/qlmonhoc">
                    <span>Quản lý Môn học</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/qlhocki">
                    <span>Quản lý Học kì</span>
                  </a>
                </li>

                <li>
                  {" "}
                  <a href="/qlhocphan">
                    <span>Quản lý Học phần</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/molophocphan">
                    <span>Quản lý Lớp học phần</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      
    </div>
  )
}
