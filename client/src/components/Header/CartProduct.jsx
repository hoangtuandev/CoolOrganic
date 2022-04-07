import { React, useState } from 'react';
import axios from 'axios'
import styles from './CartShopping.module.scss'
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";

function CartProduct(props) {

    const { item, setIsShowCartShopping, setResetTotalPrice } = props
    const baseURL = 'http://localhost:3333'
    const [amountProduct, setAmountProduct] = useState(item.gh_soluong)
    const imgProduct = require(`../../images/${item.sp_hinhanh}`)
    const totalPriceProduct = amountProduct * item.gh_dongia

    const handleSetAmountProduct = (amount) => {
        var newAmount
        if (amount <= 0)
            newAmount = 1
        else if (amount >= item.sp_tonkho)
            newAmount = item.sp_tonkho
        else
            newAmount = amount

        setAmountProduct(newAmount)

        axios.post(baseURL + '/updateAmountProductCart', {
            id: item.gh_id,
            amount: newAmount
        })
            .then((res) => {
                // console.log("SUCCESS")
                setResetTotalPrice(false)
                setResetTotalPrice(true)
            })
    }

    const handleSetAmountProductKeyBoard = (amount) => {

    }

    const handleDeleteProductCart = () => {
        axios.post(baseURL + '/deleteProductCart', { id: item.gh_id })
            .then((res) => {
                setIsShowCartShopping(false)
                setIsShowCartShopping(true)
            })
    }

    return (
        <li>
            <div className={`${styles.imgProduct}`}>
                <img src={imgProduct} alt="" />
            </div>
            <div className={`${styles.inforProduct}`}>
                <div className={`${styles.name}`}>
                    {item.sp_tensanpham} - {item.gh_donvitinh}
                </div>
                <div className={`${styles.setAmount}`}>
                    <div>Số lượng</div>
                    <div>
                        <button type='button'
                            onClick={e => handleSetAmountProduct(amountProduct - 1)}
                        ><FaMinus /></button>
                        <input
                            type="text"
                            value={amountProduct}
                            onChange={e => handleSetAmountProductKeyBoard(e.target.value)}
                        />
                        <button type='button'
                            onClick={e => handleSetAmountProduct(amountProduct + 1)}
                        ><FaPlus /></button>
                    </div>
                </div>
            </div>
            <div className={`${styles.price}`}>
                {Math.floor(totalPriceProduct / 1000)}
                .
                {`${totalPriceProduct % 1000}00`.slice(0, 3)}
                <sup>đ</sup>
            </div>
            <div
                className={`${styles.binIcon}`}
                onClick={handleDeleteProductCart}
            >
                <ImBin />
            </div>
        </li>
    );
}

export default CartProduct;