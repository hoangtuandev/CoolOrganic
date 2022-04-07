import React from 'react';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import styles from './Home.module.scss'

function ProductDiscount(props) {

    const { data } = props

    const baseURL = 'http://localhost:3333'
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const imgProduct = require(`../../images/${data.sp_hinhanh}`)
    const priceNew = data.sp_gia - (data.sp_gia * (data.spkm_tylegiam / 100))

    const handleSelectProduct = (data) => {
        removeCookie('idProduct')
        setCookie('idProduct', data.sp_id, { path: '/' })
        window.location.href = '/products/details'
    }

    return (
        // <Link to={`/products/details`} className={`${styles.linkRoute}`}>
        <li onClick={() => handleSelectProduct(data)}>
            <div className={`${styles.main}`}>
                <div className={`${styles.productImage}`}>
                    <img src={imgProduct} alt="" />
                </div>
                <div className={`${styles.productRatio}`}>{data.spkm_tylegiam}%</div>
                <div className={`${styles.productName}`}>{data.sp_tensanpham}</div>
                <div className={`${styles.productPriceNew}`}>
                    <sup className={`${styles.priceUnit}`}>đ</sup>
                    {Math.floor(priceNew / 1000)}
                    <span className={`${styles.priceThounsand}`}>.000</span>

                </div>
                <del className={`${styles.productPriceOld}`}>
                    {data.sp_gia / 1000}.000 <sup>đ</sup>
                </del>
                <div className={`${styles.productButton}`}>
                    <button>Mua Ngay</button>
                </div>
            </div>
        </li>
        // </Link>

    );
}

export default ProductDiscount;