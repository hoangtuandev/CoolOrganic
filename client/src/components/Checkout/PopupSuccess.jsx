import { React, useEffect } from 'react';
import styles from './Checkout.module.scss'
import { Link } from 'react-router-dom'
import { BsCheckLg } from "react-icons/bs";
import ImageSuccess from '../../images/undraw_Order_confirmed.png'

function PopupSuccess(props) {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className={`${styles.popupSuccess}`}>
            <div></div>
            <div className={`${styles.content}`}>

                <div className={`${styles.main}`}>
                    <div className={`${styles.left}`}>
                        <h3>ĐẶT HÀNG THÀNH CÔNG <span><BsCheckLg /></span></h3>
                        <ul>
                            <Link to='/orders'>
                                <li>
                                    <button type='button'>
                                        Xem đơn hàng
                                    </button>
                                </li>
                            </Link>
                            <Link to='/'>
                                <li>
                                    <button type='button'>
                                        Tiếp tục mua hàng
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className={`${styles.right}`}>
                        <img src={ImageSuccess} alt="" />
                    </div>
                </div>
            </div>

            <div></div>
        </div >
    );
}

export default PopupSuccess;