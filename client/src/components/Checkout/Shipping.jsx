import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './Checkout.module.scss'
import Shiper from '../../images/shipping.png'
import LocationForm from '../LocationForm/LocationForm';
import { BsTelephone } from "react-icons/bs";
// import { useEffect } from 'react';

function Shipping(props) {

    const { handleSaveInforShipping, setIsShowShipping, setIsShowPayment, inforShippingOrder, cookies } = props
    const shipping = props.inforShippingOrder
    const [numberPhone, setNumberPhone] = useState(cookies.phone)
    const [selectedCity, setSelectedCity] = useState(shipping.cityOrder)
    const [selectedDistrict, setSelectedDistrict] = useState(shipping.districtOrder)
    const [selectedWard, setSelectedWard] = useState(shipping.wardOrder)
    const [detailAddress, setDetailAddress] = useState(shipping.homeOrder)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const handleClickBtnContinue = () => {
        handleSaveInforShipping({
            nameOrder: cookies.fullname,
            phoneOrder: numberPhone,
            cityOrder: selectedCity,
            districtOrder: selectedDistrict,
            wardOrder: selectedWard,
            homeOrder: detailAddress,
        })
        setIsShowShipping(false)
        setIsShowPayment(true)
    }

    return (
        <div className={`${styles.shipping}`}>
            <div></div>
            <div className={`${styles.content}`}>
                <div className={`${styles.process}`}>
                    <div className={`${styles.lineProcess}`}>
                        <ul>
                            <li className={`${styles.firstNode}`}>
                                <label>Mua hàng</label>
                                <button type='button'>1</button>
                            </li>
                            <li className={`${styles.lined}`}>
                                <label htmlFor="">Vận chuyển</label>
                                <button type='button'>2</button>
                            </li>
                            <Link to="/payment">
                                <li className={`${styles.linning}`}>
                                    <label>Thanh toán</label>
                                    <button type='button'>3</button>
                                </li>
                            </Link>
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
                        <h3>Thông tin vận chuyển</h3>
                        <ul>
                            <li className={`${styles.numberPhoneFeild}`}>
                                <input
                                    type="text" placeholder='Số điện thoại'
                                    value={numberPhone}
                                    onChange={(e) => setNumberPhone(e.target.value)}
                                />
                                <label><BsTelephone /></label>
                            </li>
                            <li>
                                <LocationForm
                                    setSelectedCity={setSelectedCity}
                                    setSelectedDistrict={setSelectedDistrict}
                                    setSelectedWard={setSelectedWard}
                                    inforShippingOrder={inforShippingOrder}
                                ></LocationForm>
                            </li>
                            <li>
                                <textarea
                                    type="text" placeholder='Số nhà, tên dường...'
                                    value={detailAddress}
                                    onChange={e => setDetailAddress(e.target.value)}
                                />
                            </li>
                        </ul>
                        <button
                            type='button'
                            onClick={handleClickBtnContinue}
                        >TIẾP TỤC</button>
                    </div>
                    <div className={`${styles.right}`}>
                        <img src={Shiper} alt="" />
                    </div>
                </div>
            </div>

            <div></div>
        </div >
    );
}

export default Shipping;