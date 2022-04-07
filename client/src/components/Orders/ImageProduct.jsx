import React from 'react';
// import styles from './Orders.module.scss'

function ImageProduct(props) {

    const { item } = props
    const imgProduct = require(`../../images/${item.ctdh_hinhanh}`)

    return (
        <li>
            <img src={imgProduct} alt="" />
        </li>
    );
}

export default ImageProduct;