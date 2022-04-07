import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './UserForm.module.scss'
import { MdCall, MdLock, MdTouchApp, MdAccountCircle } from "react-icons/md";
import BackgroundForm from '../../images/backgroung_login.jpg'

function Register(props) {

    const baseURL = 'http://localhost:3333'
    const [fullname, setFullname] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isErrorPassword, setIsErrorPassword] = useState(false)
    const [idClient, setIdClient] = useState('')

    const genderClient = ''
    const addressClient = ''

    useEffect(() => {
        const randomid = Math.floor(Math.random() * 89999999) + 10000000;
        setIdClient('KH00' + randomid)
    }, [])

    const handleSubmitRegister = () => {

        if (password !== passwordConfirm || password === '') {
            setIsErrorPassword(true)
        }
        else {
            setIsErrorPassword(false)

            axios.post(baseURL + '/register/addAccountClient', { phone: numberPhone, password, fullname })
            axios.post(baseURL + '/register/addClient', {
                id: idClient,
                fullname,
                gender: genderClient,
                phone: numberPhone,
                address: addressClient,
                account: numberPhone
            })
                .then((res) => {
                    window.location.href = "/login"
                })
        }
    }

    const tabSelected = {
        color: 'orangered',
        borderBottom: '3px solid orangered',
        fontWeight: 'bold',
    }

    return (
        <div className={`${styles.userForm}`}>
            <form action="" >
                <ul className={`${styles.tabForm}`}>
                    <li className={`${styles.tabRegister}`} ><button style={tabSelected}>ĐĂNG KÝ</button></li>
                    <li className={`${styles.tabLogin}`}>
                        <Link to="/login">
                            <button>ĐĂNG NHẬP</button>
                        </Link>
                    </li>
                </ul>
                <div className={`${styles.control}`}>
                    <ul>
                        <li>
                            <input
                                type="text" className={`${styles.textField}`} placeholder=' '
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Họ tên</label>
                            <span className={`${styles.icon}`}><MdAccountCircle /></span>
                        </li>
                        <li>
                            <input
                                type="text" className={`${styles.textField}`} placeholder=' '
                                value={numberPhone}
                                onChange={(e) => setNumberPhone(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Số điện thoại</label>
                            <span className={`${styles.icon}`}><MdCall /></span>
                        </li>
                        <li>
                            <input
                                type="password" className={`${styles.textField}`} placeholder=' '
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Mật khẩu</label>
                            <span className={`${styles.icon}`}><MdLock /></span>
                        </li>
                        <li>
                            <input
                                type="password" className={`${styles.textField}`} placeholder=' '
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Xác nhận mật khẩu</label>
                            <span className={`${styles.icon}`}><MdTouchApp /></span>
                        </li>
                    </ul>
                </div>
                {
                    isErrorPassword &&
                    <div className={`${styles.errorPassword}`}>
                        Mật khẩu xác nhận không đúng !
                    </div>
                }
                <div className={`${styles.buttonForm}`}>
                    <button type='button'
                        className={`${styles.btnSubmit}`}
                        onClick={handleSubmitRegister}
                    >
                        ĐĂNG KÝ
                    </button>
                </div>

            </form>
            <div className={styles.bannerForm}>
                <img src={BackgroundForm} alt="" />
            </div>
            {/* <div></div> */}
        </div>
    );
}

export default Register;