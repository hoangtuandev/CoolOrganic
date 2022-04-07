import React from 'react';
import styles from './DetailsProduct.module.scss'
import { FaShoppingBasket, FaSearchPlus } from "react-icons/fa";

function SimilarProduct(props) {

    const { product } = props
    const imgProduct = require(`../../images/${product.sp_hinhanh}`)

    return (
        <li>
            <div className={`${styles.content}`}>
                <div className={`${styles.boxOption}`}>
                    <span className={`${styles.optionShopping}`}><FaShoppingBasket /></span>
                    <span className={`${styles.optionView}`}>
                        <FaSearchPlus />
                    </span>
                </div>
                <div className={`${styles.productImage}`}>
                    {product && <img src={imgProduct} alt="" />}
                </div>
                <div className={`${styles.productName}`}>{product.sp_tensanpham}</div>
                <div className={`${styles.productPrice}`}>
                    {product.sp_gia / 1000}.000
                    <sup className={`${styles.priceUnit}`}>đ</sup>
                </div>
            </div>
        </li>
    );
}

export default SimilarProduct;