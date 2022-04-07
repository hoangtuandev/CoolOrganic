import { React, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Checkout.module.scss'
import ProductOrder from './ProductOrder';
import PayPall from './PayPall';

function Confirm(props) {

    const {
        inforProductsOrder,
        inforShippingOrder,
        inforPaymentOrder,
        setIsShowPayment,
        setIsShowConfirm,
        setIsShowListDiscount,
        codeDiscount,
        setCodeDiscount,
        costDiscount,
        cookies,
        setIsShowPopupOrderSuccess
    } = props

    var priceOrder = 0
    var costShipping = 22500
    const baseURL = 'http://localhost:3333'

    // console.log("Product: ", inforProductsOrder)
    // console.log("Shipping:", inforShippingOrder)
    // console.log("Payment", inforPaymentOrder)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const handleClickBtnBack = () => {
        setIsShowPayment(true)
        setIsShowConfirm(false)
    }

    const handleOpenListDiscount = () => {
        setIsShowListDiscount(true)
    }

    const handlePayment = () => {
        const randomid = Math.floor(Math.random() * 899999999999) + 100000000000;
        const idOrder = ('DH00' + randomid)

        const client = cookies.phone

        var current = new Date();
        var date = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
        var time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
        var dateTime = date + ' ' + time;

        const address = `${inforShippingOrder.homeOrder}, ${inforShippingOrder.wardOrder}, ${inforShippingOrder.districtOrder}, ${inforShippingOrder.cityOrder}`

        const phone = inforShippingOrder.phoneOrder

        const typePayment = inforPaymentOrder

        const total = priceOrder + costShipping - costDiscount

        axios.post(baseURL + '/orders/addOrder',
            { idOrder, client, dateTime, address, phone, typePayment, total }
        )
            .then((res) => {
                inforProductsOrder.map((item, index) => (
                    axios.post(baseURL + '/detailOrder/addDetailOrder',
                        {
                            id: 'CTDH00' + (Math.floor(Math.random() * 8999999999999999) + 1000000000000000),
                            order: idOrder,
                            product: item.idProduct,
                            amount: item.amountProduct,
                            unit: item.unitProduct,
                            image: item.imageProduct,
                            price: item.totalPrice
                        }
                    )
                        .then((res) => {
                            setIsShowPopupOrderSuccess(true)
                            setIsShowConfirm(false)
                        })
                ))
            })
    }

    return (
        <div className={`${styles.confirm}`}>
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
                            <Link to='/payment'>
                                <li className={`${styles.lined}`}>
                                    <label>Thanh toán</label>
                                    <button type='button'>3</button>
                                </li>
                            </Link>
                            <li className={`${styles.lined}`}>
                                <label >Xác nhận</label>
                                <button type='button'>4</button>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.main}`}>
                    <div className={`${styles.left}`}>
                        <h3>Thông tin nhận hàng</h3>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Khách hàng:</td>
                                    <td className={`${styles.content}`}>{inforShippingOrder.nameOrder}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Số điện thoại:</td>
                                    <td className={`${styles.content}`}>{inforShippingOrder.phoneOrder}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Địa chỉ nhận hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {
                                            `${inforShippingOrder.homeOrder}, 
                                            ${inforShippingOrder.wardOrder}, 
                                            ${inforShippingOrder.districtOrder}, 
                                            ${inforShippingOrder.cityOrder}`
                                        }

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Hình thức thanh toán</h3>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    {
                                        inforPaymentOrder === 'online' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán trực tuyến bằng <span>PayPall</span>
                                        </td>
                                    }
                                    {
                                        inforPaymentOrder === 'offline' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán khi nhận hàng
                                        </td>
                                    }
                                </tr>
                            </tbody>
                        </table>

                        <h3>Mã giảm giá</h3>
                        <div className={`${styles.discount}`}>
                            <input
                                type="text"
                                value={codeDiscount}
                                onChange={e => setCodeDiscount(e.target.value)}
                            />
                            <button
                                type='button'
                                onClick={handleOpenListDiscount}

                            >
                                LẤY MÃ
                            </button>

                        </div>
                        <button
                            className={`${styles.btnBack}`}
                            type='button'
                            onClick={handleClickBtnBack}
                        >TRỞ VỀ</button>
                    </div>

                    <div className={`${styles.right}`}>
                        <h3>CHI TIẾT ĐƠN HÀNG</h3>
                        <ul>
                            {
                                inforProductsOrder.map((item, index) => {
                                    priceOrder += item.totalPrice
                                    // setTotalPrice(priceOrder)
                                    return <ProductOrder key={index} item={item} ></ProductOrder>
                                })
                            }
                        </ul>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Đơn hàng</td>
                                    <td className={`${styles.content}`}>
                                        {Math.floor((priceOrder) / 1000)}.
                                        {`${(priceOrder) % 1000}00`.slice(0, 3)}
                                        <sup>đ</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Phí vận chuyển</td>
                                    <td className={`${styles.content}`}>{Math.floor(costShipping / 1000)}.000<sup>đ</sup></td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Giảm giá</td>
                                    <td className={`${styles.content}`}>
                                        -{Math.floor((costDiscount) / 1000)}.
                                        {`${(costDiscount) % 1000}00`.slice(0, 3)}
                                        <sup>đ</sup></td>
                                </tr>
                                <tr>
                                    <td className={`${styles.titleTotalPrice}`}>TỔNG CỘNG</td>
                                    <td className={`${styles.totalPrice}`}>
                                        {Math.floor((priceOrder + costShipping - costDiscount) / 1000)}.
                                        {`${(priceOrder + costShipping) % 1000}00`.slice(0, 3)}
                                        <sup>đ</sup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            inforPaymentOrder === 'online' &&
                            // <button className={`${styles.btnPayPall}`} type="button">
                            //     <img src={BtnPayPall} alt="" />
                            // </button>
                            <div className={`${styles.paypal}`}>
                                <PayPall
                                    handlePayment={handlePayment}
                                ></PayPall>
                            </div>


                        }
                        {
                            inforPaymentOrder === 'offline' &&
                            <button
                                className={`${styles.btnPayment}`} type="button"
                                onClick={handlePayment}
                            >
                                ĐẶT HÀNG
                            </button>
                        }
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Confirm;