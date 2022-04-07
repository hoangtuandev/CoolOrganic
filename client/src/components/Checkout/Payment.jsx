import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './Checkout.module.scss'
import Pay from '../../images/payment_undraw.png'
import PayPall from '../../images/paypall_icon.png'
import { FaCreditCard, FaMoneyBillAlt, FaCheck } from "react-icons/fa";
// import { useEffect } from 'react';

function Payment(props) {

    const { setIsShowPayment, setIsShowConfirm, handleSaveInforPayment, setIsShowShipping, inforPaymentOrder } = props
    const [typePayment, setTypePayment] = useState(inforPaymentOrder)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const handleSelectTypePayment = (type) => {
        setTypePayment(type)
    }

    const handleClickBtnBack = () => {
        setIsShowShipping(true)
        setIsShowPayment(false)
    }

    const handleClickBtnContinue = () => {
        handleSaveInforPayment(typePayment)
        setIsShowPayment(false)
        setIsShowConfirm(true)
    }

    return (
        <div className={`${styles.payment}`}>
            <div></div>
            <div className={`${styles.content}`}>
                <div className={`${styles.process}`}>

                    <div className={`${styles.lineProcess}`}>
                        <ul>
                            <li className={`${styles.firstNode}`}>
                                <label>Mua hàng</label>
                                <button type='button'>1</button>
                            </li>
                            <Link to='/shipping'>
                                <li className={`${styles.lined}`}>
                                    <label htmlFor="">Vận chuyển</label>
                                    <button type='button'>2</button>
                                </li>
                            </Link>
                            <li className={`${styles.lined}`}>
                                <label>Thanh toán</label>
                                <button type='button'>3</button>
                            </li>
                            <Link to='/confirm'>
                                <li className={`${styles.linning}`}>
                                    <label >Xác nhận</label>
                                    <button type='button'>4</button>

                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.main}`}>
                    <div className={`${styles.left}`}>
                        <h3>Hình thức thanh toán</h3>
                        <ul>
                            <li>
                                <button
                                    type='button'
                                    // style={`${styles.selectedBtn}`}
                                    className={`${typePayment === "offline" ? styles.selectedBtn : {}}`}
                                    onClick={() => handleSelectTypePayment('offline')}
                                >
                                    <span className={`${styles.icon}`}>
                                        <FaMoneyBillAlt />
                                    </span>
                                    <span className={`${styles.label}`}>
                                        Thanh toán khi nhận hàng
                                    </span>
                                    <span className={`${styles.iconCheck}`}>
                                        <FaCheck />
                                    </span>
                                </button>

                            </li>
                            <li>
                                <button
                                    type='button'
                                    className={`${typePayment === "online" ? styles.selectedBtn : {}}`}
                                    onClick={() => handleSelectTypePayment('online')}
                                >
                                    <span className={`${styles.icon}`}>
                                        <FaCreditCard />
                                    </span>
                                    <span className={`${styles.label}`}>
                                        Thanh toán trực tuyến
                                    </span>
                                    <span className={`${styles.iconCheck}`}>
                                        <FaCheck />
                                    </span>
                                </button>
                                <ul className={`${styles.typePaymentOnline}`}>
                                    <li>
                                        <img src={PayPall} alt="" />
                                    </li>

                                </ul>
                            </li>
                        </ul>
                        <button
                            type='button'
                            className={`${styles.btnBack}`}
                            onClick={handleClickBtnBack}
                        >TRỞ VỀ</button>
                        <button
                            type='button'
                            className={`${styles.btnContinue}`}
                            onClick={handleClickBtnContinue}
                        >TIẾP TỤC</button>

                    </div>

                    <div className={`${styles.right}`}>
                        <img src={Pay} alt="" />
                    </div>
                </div>
            </div>

            <div></div>
        </div >
    );
}

export default Payment;