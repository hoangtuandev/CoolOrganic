import React from 'react';
import styles from './Orders.module.scss'

function ProductOrder(props) {

    const { item } = props

    const imgProduct = require(`../../images/${item.sp_hinhanh}`)

    return (
        <li>
            <span className={`${styles.amount}`}>{item.ctdh_soluong}</span>
            <img src={imgProduct} alt="" />
            <span className={`${styles.name}`}>{item.sp_tensanpham} - {item.ctdh_donvitinh}</span>
            <span className={`${styles.price}`}>
                {Math.floor((item.ctdh_tongtien) / 1000)}.
                {`${(item.ctdh_tongtien) % 1000}00`.slice(0, 3)}
                <sup>đ</sup>
            </span>
        </li>
    );
}

export default ProductOrder;