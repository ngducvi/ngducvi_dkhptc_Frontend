import React from 'react'

export default function menusv() {
  return (
    <div>
        <div className="box-df-menu">
            <div className="accordion-menu">
              <ul>
                <li>
                  <a href="/home">
                    <span>Trang chủ</span>
                  </a>
                </li>
                <li>
                  <a href="/thoikhoabieu">
                    <span>Lịch học trong tuần</span>
                  </a>
                </li>
                <li>
                  <a href="/dangkyhocphan">
                    <span>Đăng ký học phần</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/chuongtrinhkhung">
                    <span>Chương trình khung</span>
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
                  <a href="/congno">
                    <span>Xem công nợ</span>
                  </a>
                </li>


              </ul>
            </div>
          </div>
      
    </div>
  )
}
