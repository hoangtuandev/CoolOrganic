import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ImSearch } from "react-icons/im";
import { MdLogout, MdAssignmentInd, MdArrowDropDown, MdOutlineShoppingCart, MdBackupTable } from "react-icons/md";
import user from '../../images/avatar_fb1.jpg'
import styles from './Header.module.scss'
import logo from '../../images/logo_coolorganic.png'
import CartShopping from './CartShopping'

function Header(props) {

    const baseURL = 'http://localhost:3333'
    const { isLogin, cookies, handleLogOut, handleGetSearchProduct, handleSetInforProductsOrderByCart } = props
    const [isShowOptionUser, setIsShowOptionUser] = useState(false)
    const [isShowCartShopping, setIsShowCartShopping] = useState(false)
    const [keySearch, setKeySearch] = useState('')
    const [allProducts, setAllProducts] = useState('')

    useEffect(() => {
        axios.get(baseURL + '/products', {})
            .then((res) => {
                setAllProducts(res.data)
            })
    }, [])

    const styleShow = {
        right: '0px',
        transition: '2s ease-in-out',
        // border: '1px solid green'
    }

    const removeAccents = (str) => {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }

    const handleSubmitSearchProduct = () => {
        var fitProduct = []

        allProducts.map((product, index) => {
            const nameProduct = (product.sp_tensanpham).toLowerCase();
            const key = removeAccents(keySearch).toLowerCase()

            if ((removeAccents(nameProduct)).includes(key)) {
                // console.log(product)
                fitProduct.push(product)
            }

            return key
        })
        handleGetSearchProduct(fitProduct)
        setKeySearch('')
    }

    const handleShowOptionUser = () => {
        setIsShowOptionUser(!isShowOptionUser)
    }

    const handleClickCartShopping = () => {
        if (isLogin) {
            setIsShowCartShopping(!isShowCartShopping)
        }
        else {
            setIsShowCartShopping(false)
            window.location.href = "/login"
        }
    }

    return (
        <div className={`${styles.header}`}>

            {
                (isShowCartShopping &&
                    <CartShopping
                        styleShow={styleShow}
                        cookies={cookies}
                        setIsShowCartShopping={setIsShowCartShopping}
                        handleClickCartShopping={handleClickCartShopping}
                        handleSetInforProductsOrderByCart={handleSetInforProductsOrderByCart}
                    ></CartShopping>)

            }

            <div className={`${styles.headerLogo}`}>
                <img src={logo} alt="" />
            </div>

            <div className={`${styles.headerSearch}`}>
                <div className={`${styles.searchBox}`}>
                    <input
                        className={`${styles.searchField}`} placeholder=' ' type="text"
                        value={keySearch}
                        onChange={(e) => setKeySearch(e.target.value)}
                    />
                    <label className={`${styles.searchLable}`}>Tìm kiếm sản phẩm...</label>
                    <Link to='/search'>
                        <label
                            className={`${styles.searchIcon}`}
                            onClick={handleSubmitSearchProduct}
                        >
                            <ImSearch />
                        </label>
                    </Link>

                </div>

            </div>

            <ul className={`${styles.headerUser}`}>
                <li
                    className={`${styles.cartShopping}`}
                    onClick={handleClickCartShopping}
                >
                    <span><MdOutlineShoppingCart /></span>
                </li>
                {
                    !isLogin &&
                    <li className={`${styles.userButton}`}>
                        <Link to="/register"> <button>ĐĂNG KÝ</button></Link>
                        <Link to="/login"><button>ĐĂNG NHẬP</button></Link>
                    </li>
                }
                {
                    isLogin &&
                    <li
                        className={`${styles.userAccount}`}
                        onClick={handleShowOptionUser}

                    >
                        <p className={`${styles.iconDown}`}><MdArrowDropDown /></p>
                        <p><img src={user} alt="" /></p>

                    </li>
                }
            </ul>
            {
                isShowOptionUser &&
                <ul className={`${styles.optionUser}`}>
                    <li>
                        <span className={`${styles.optionIcon}`}><MdAssignmentInd /></span>
                        <span>Thông tin khách hàng</span>
                    </li>
                    <Link to='/orders'>
                        <li>
                            <span className={`${styles.optionIcon}`}><MdBackupTable /></span>
                            <span>Đơn hàng</span>
                        </li>
                    </Link>
                    <li
                        onClick={handleLogOut}
                    >
                        <span className={`${styles.optionIcon}`}><MdLogout /></span>
                        <span>Đăng xuất</span>
                    </li>
                </ul>
            }
        </div>
    );
}

export default Header;