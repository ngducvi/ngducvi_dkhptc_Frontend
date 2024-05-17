import React from 'react'

export default function DanhSachSV() {
    const students = [
        {
            id: 1,
            code: 'SV01',
            name: 'Nguyễn Văn A',
            dob: '01/01/2000',
            address: 'Hà Nội',
            email: 'ngduvcicc@gmail.com',
            phone: '0123456789'
        },
        {
            id: 2,
            code: 'SV02',
            name: 'Nguyễn Văn B',
            dob: '01/01/2000',
            address: 'Hà Nội',
            email: 'huy@gmail.com',
            phone: '0123456789'
        }
    ]
  return (
    <div>
      <div className='container'>
        {/* danh sach sinh vien */}
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center'>Danh sách sinh viên</h1>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Mã sinh viên</th>
                  <th scope='col'>Họ tên</th>
                  <th scope='col'>Ngày sinh</th>
                  <th scope='col'>Địa chỉ</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Số điện thoại</th>
                  <th scope='col'>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                    <tr key={student.id}>
                        <th scope='row'>{index + 1}</th>
                        <td>{student.code}</td>
                        <td>{student.name}</td>
                        <td>{student.dob}</td>
                        <td>{student.address}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>
                            <button className='btn btn-primary'>Sửa</button>
                            <button className='btn btn-danger'>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  )
}
