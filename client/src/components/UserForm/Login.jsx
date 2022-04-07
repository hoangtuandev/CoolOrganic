import { React, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdCall, MdLock } from "react-icons/md";
import styles from './UserForm.module.scss'
import BackgroundForm from '../../images/backgroung_login.jpg'

function Login(props) {
    const { handleSetCookies } = props
    const baseURL = 'http://localhost:3333'
    const [numberPhone, setNumberPhone] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorNumberphone, setErrorNumberphone] = useState(false)

    const handleSubmitLogin = () => {
        if (numberPhone !== '' || password !== '') {
            axios.post(baseURL + '/login/user', { phone: numberPhone })
                .then((res) => {

                    const user = res.data[res.data.length - 1]
                    console.log(res.data)
                    if (!user) {
                        setErrorNumberphone(true)
                    }
                    else if (user && user.tkkh_matkhau === password) {
                        setErrorPassword(false)
                        setErrorNumberphone(false)
                        handleSetCookies(user)
                    }
                    else {
                        setErrorPassword(true)
                        setErrorNumberphone(false)
                    }
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
                    <li className={`${styles.tabRegister}`} >
                        <Link to="/register">
                            <button>ĐĂNG KÝ</button>
                        </Link>
                    </li>
                    <li className={`${styles.tabLogin}`}><button style={tabSelected}>ĐĂNG NHẬP</button></li>
                </ul>
                <div className={`${styles.control}`}>
                    <ul>
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
                    </ul>
                </div>
                {
                    !errorNumberphone && errorPassword &&
                    <p className={`${styles.errorPassword}`}>Sai mật khẩu !</p>
                }
                {
                    errorNumberphone &&
                    <p className={`${styles.errorPassword}`}>Số điện thoại chưa đúng ! !</p>
                }
                <div className={`${styles.buttonForm}`}>
                    <button
                        className={`${styles.btnSubmit}`} type='button'
                        onClick={handleSubmitLogin}
                    >ĐĂNG NHẬP</button>
                </div>
                <div className={`${styles.missPassword}`}>
                    Quên mật khẩu ?
                </div>
            </form>
            <div className={styles.bannerForm}>
                <img src={BackgroundForm} alt="" />
            </div>
            {/* <div></div> */}
        </div>
    );
}

export default Login;