import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './CartShopping.module.scss'
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgPlayTrackNext } from "react-icons/cg";
import CartProduct from './CartProduct';
import { useRef } from 'react';

function CartShopping(props) {

    const { styleShow, cookies, handleClickCartShopping, setIsShowCartShopping, handleSetInforProductsOrderByCart } = props
    const baseURL = 'http://localhost:3333'
    const [productsCart, setProductsCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [resetTotalPrice, setResetTotalPrice] = useState(true)
    let prevProduct = useRef([])

    axios.post(baseURL + '/getTotalPrice', { phone: cookies.phone })
        .then((res) => {
            setTotalPrice(res.data[res.data.length - 1].totalPrice)
        })

    useEffect(() => {
        axios.post(baseURL + '/cartShopping', { phone: cookies.phone })
            .then((res) => {
                setProductsCart(res.data)
            })
    }, [])

    const handleCloseCartShopping = () => {
        setIsShowCartShopping(false)
    }

    const handleClickBuyCartShopping = () => {
        productsCart.map((item, index) => {
            let product = {
                idProduct: item.sp_id,
                nameProduct: item.sp_tensanpham,
                amountProduct: item.gh_soluong,
                unitProduct: item.gh_donvitinh,
                totalPrice: item.gh_dongia,
                imageProduct: item.sp_hinhanh
            }

            prevProduct.current = [...prevProduct.current, product]
            return product
        })
        handleSetInforProductsOrderByCart(prevProduct.current)
        setIsShowCartShopping(false)
    }

    return (
        <div
            className={`${styles.cartShopping}`}>
            <div
                className={`${styles.overBackround}`}
                onClick={handleCloseCartShopping}
            ></div>
            <div style={styleShow} className={`${styles.main}`} >
                <button
                    className={`${styles.continueBuy}`}
                    onClick={handleClickCartShopping}
                >
                    <span>Tiếp tục mua hàng </span>
                    <span className={`${styles.icon}`}><CgPlayTrackNext /></span>
                </button>
                <p>
                    <span className={`${styles.icon}`}><MdOutlineShoppingCart /></span>
                    <span>GIỎ HÀNG</span>
                </p>
                <ul>
                    {
                        productsCart.map((item, index) => (
                            <CartProduct CartProduct
                                key={index}
                                item={item}
                                setIsShowCartShopping={setIsShowCartShopping}
                                setResetTotalPrice={setResetTotalPrice}
                            ></CartProduct>
                        ))
                    }
                </ul>

                <div className={`${styles.payment}`}>
                    <div>
                        Tổng tiền:
                        {
                            resetTotalPrice &&
                            <span>
                                {Math.floor(totalPrice / 1000)}.
                                {`${totalPrice % 1000}00`.slice(0, 3)}<sup>đ</sup>
                            </span>
                        }

                    </div>
                    <Link to='/checkout'>
                        <button
                            type='button'
                            onClick={handleClickBuyCartShopping}
                        >MUA NGAY</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default CartShopping;