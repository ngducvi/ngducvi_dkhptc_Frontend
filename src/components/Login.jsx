import React, { useState, useEffect } from 'react';
import { listuser } from '../services/userservice';
import '../assets/styles/content.css'
import HomeSV from '../pages/HomeSV';
 import {useNavigate} from 'react-router-dom';
function Components() { 
    const [user, setUser] = useState([]); 
     const navigate = useNavigate();
    useEffect(() => {
        listuser().then((res) => {
            setUser(res.data); 
        }).catch((err) => {
            console.log(err);
        });
    }, []); 

    function handleLogin() {
        navigate('/home');
    }

    return (
        <div className='content-login'>
            <div className='container-login'>
                <div className='box-login'>
                    <p>Đăng nhập</p>
                    <form>
                        <div className='inputBox'>
                            <input type='text' name='' required='' />
                            <label>Mã đăng nhập</label>
                        </div>
                        <div className='inputBox'>
                            <input type='password' name='' required='' />
                            <label>Mật khẩu</label>
                        </div>
                        <input type='submit' name='' value='Đăng nhập' onClick={()=>handleLogin()} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Components;
