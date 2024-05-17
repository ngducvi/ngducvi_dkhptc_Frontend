import React from 'react'
import '../assets/styles/footer.css'
import { Typography } from "@material-tailwind/react";

 
const currentYear = new Date().getFullYear();
const FooterComponent = () => {
  return (
    <div>
     <footer className="footer">
        <div className="footer__left">
          <p>Đại học Công Nghiệp Thành Phố Hồ Chí Minh</p>
          <p>Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
          <p>Điện thoại: 024.3868.2301</p>
        </div>
        <div className="footer__right">
          <p>Thống kê lượng truy cập</p>
          <p>Đang cập nhật</p>
        </div>
        <div className="footer__footer">
          <p>© {currentYear} All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default FooterComponent
