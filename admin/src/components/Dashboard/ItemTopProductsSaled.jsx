import { React, useState, useEffect } from 'react';
import styles from './Dashboard.module.scss'

function ItemTopProductsSaled(props) {

    const { index, item } = props
    const imgProduct = require(`../../images/${item.sp_hinhanh}`)
    const [stylesRanked, setStylesRanked] = useState({})

    useEffect(() => {
        if (index + 1 === 1)
            setStylesRanked({ backgroundColor: '#00ae4a' })
        else if (index + 1 === 2)
            setStylesRanked({ backgroundColor: '#f01606' })
        else if (index + 1 === 3)
            setStylesRanked({ backgroundColor: '#0051ae' })
    }, [index])

    return (
        <tr>
            <td className={`${styles.tbodyRanked}`} >
                <span style={stylesRanked}>{index + 1}</span></td>
            <td>
                <img src={imgProduct} alt="" />
            </td>
            <td>{item.sp_id}</td>
            <td>{item.sp_tensanpham}</td>
            <td className={`${styles.amountSale}`}>{item.totalAmount}</td>
            <td></td>
        </tr>
    );
}

export default ItemTopProductsSaled;