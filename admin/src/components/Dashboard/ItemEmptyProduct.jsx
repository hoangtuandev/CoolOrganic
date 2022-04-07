import React from 'react';
// import styles from './Dashboard.module.scss'
// import imgProduct from '../../images/Kiwi.jpg'

function ItemEmptyProduct(props) {

    const { item } = props

    const imgProduct = require(`../../images/${item.sp_hinhanh}`)

    return (
        <tr>
            <td>
                <img src={imgProduct} alt="" />
            </td>
            <td>{item.sp_id}</td>
            <td>{item.sp_tensanpham}</td>
        </tr>
    );
}

export default ItemEmptyProduct;