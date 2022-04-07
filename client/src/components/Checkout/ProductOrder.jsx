import { React } from 'react';
import styles from './Checkout.module.scss'

function ProductOrder(props) {

    const { item } = props

    var imgProduct = require(`../../images/${item.imageProduct}`)

    return (
        <li>
            <span className={`${styles.amount}`}>{item.amountProduct}</span>
            <img src={imgProduct} alt="" />
            <span className={`${styles.name}`}>{item.nameProduct} - {item.unitProduct}</span>
            <span className={`${styles.price}`}>{item.totalPrice}<sup>đ</sup></span>
        </li>
    );
}

export default ProductOrder;