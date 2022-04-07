import { React, useState } from 'react';
import styles from './Checkout.module.scss'
import Confirm from './Confirm';
import ListDiscount from './ListDiscount';
import Payment from './Payment';
import PopupSuccess from './PopupSuccess';
import Shipping from './Shipping';

function Checkout(props) {

    const { inforProductsOrder, cookies } = props
    const [isShowShipping, setIsShowShipping] = useState(true)
    const [isShowPayment, setIsShowPayment] = useState(false)
    const [isShowConfirm, setIsShowConfirm] = useState(false)
    const [isShowListDiscount, setIsShowListDiscount] = useState(false)
    const [isShowPopupOrderSuccess, setIsShowPopupOrderSuccess] = useState(false)
    const [inforShippingOrder, setInforShippingOrder] = useState({})
    const [inforPaymentOrder, setInforPaymentOrder] = useState()
    const [codeDiscount, setCodeDiscount] = useState('')
    const [totalPrice, setTotalPrice] = useState()
    const [costDiscount, setCostDiscount] = useState(0)

    const handleSaveInforShipping = (data) => {
        setInforShippingOrder(data)
    }

    const handleSaveInforPayment = (data) => {
        setInforPaymentOrder(data)
    }

    return (
        <div className={`${styles.checkout}`}>
            {
                isShowShipping &&
                <Shipping
                    cookies={cookies}
                    setIsShowShipping={setIsShowShipping}
                    setIsShowPayment={setIsShowPayment}
                    inforShippingOrder={inforShippingOrder}
                    handleSaveInforShipping={handleSaveInforShipping}
                ></Shipping>
            }
            {
                isShowPayment &&
                <Payment
                    setIsShowShipping={setIsShowShipping}
                    setIsShowPayment={setIsShowPayment}
                    setIsShowConfirm={setIsShowConfirm}
                    inforPaymentOrder={inforPaymentOrder}
                    handleSaveInforPayment={handleSaveInforPayment}
                ></Payment>
            }
            {
                isShowConfirm &&
                <Confirm
                    inforProductsOrder={inforProductsOrder}
                    inforShippingOrder={inforShippingOrder}
                    inforPaymentOrder={inforPaymentOrder}
                    setIsShowPayment={setIsShowPayment}
                    setIsShowConfirm={setIsShowConfirm}
                    setIsShowListDiscount={setIsShowListDiscount}
                    codeDiscount={codeDiscount}
                    setTotalPrice={setTotalPrice}
                    setCodeDiscount={setCodeDiscount}
                    costDiscount={costDiscount}
                    cookies={cookies}
                    setIsShowPopupOrderSuccess={setIsShowPopupOrderSuccess}
                ></Confirm>
            }
            {
                isShowListDiscount &&
                <ListDiscount
                    setIsShowListDiscount={setIsShowListDiscount}
                    inforProductsOrder={inforProductsOrder}
                    setCodeDiscount={setCodeDiscount}
                    totalPrice={totalPrice}
                    setCostDiscount={setCostDiscount}
                ></ListDiscount>
            }
            {
                isShowPopupOrderSuccess &&
                <PopupSuccess></PopupSuccess>
            }
        </div>
    );
}

export default Checkout;