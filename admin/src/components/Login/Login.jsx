import { React, useState } from 'react';
import axios from 'axios'
import styles from './Login.module.scss'
import { MdCall, MdLock } from "react-icons/md";
import BackgroundForm from '../../images/backgroung_login.jpg'

function Login(props) {

    const { handleSetCookieLogin } = props
    const baseUrl = 'http://localhost:3333'
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShowErrDontLogin, setisShowErrDontLogin] = useState(false)

    const handleChangeUsername = (value) => {
        setUsername(value)
        setisShowErrDontLogin(false)
    }

    const handleChangePassword = (value) => {
        setPassword(value)
        setisShowErrDontLogin(false)
    }

    const handleSubmitLogin = () => {
        axios.post(baseUrl + '/getAccountAdminByLogin', { username: username })
            .then((res) => {
                let cookie = res.data[res.data.length - 1]
                if (cookie.tkqt_matkhau === password && cookie.tkqt_trangthai === 'OPEN') {
                    handleSetCookieLogin(cookie)
                }
                else {
                    setisShowErrDontLogin(true)
                }
            })
    }

    return (
        <div className={`${styles.userForm}`}>
            <form action="" >
                <div className={`${styles.control}`}>
                    <h1>ĐĂNG NHẬP </h1>
                    <ul>
                        <li>
                            <input
                                type="text" className={`${styles.textField}`} placeholder=' '
                                value={username}
                                onChange={e => handleChangeUsername(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Tên đăng nhập</label>
                            <span className={`${styles.icon}`}><MdCall /></span>
                        </li>
                        <li>
                            <input
                                type="text" className={`${styles.textField}`} placeholder=' '
                                value={password}
                                onChange={e => handleChangePassword(e.target.value)}
                            />
                            <label className={`${styles.label}`}>Mật khẩu</label>
                            <span className={`${styles.icon}`}><MdLock /></span>
                        </li>
                        {
                            isShowErrDontLogin &&
                            <li className={`${styles.errAccountLock}`}>
                                Tài khoản không thể đăng nhập!
                            </li>
                        }

                    </ul>
                </div>

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