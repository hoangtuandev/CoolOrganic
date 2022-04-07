import { React, useState, useEffect } from 'react';
import styles from './Dashboard.module.scss'

function ItemTopClient(props) {

    const { index, item } = props
    const [stylesRanked, setStylesRanked] = useState({})

    const formatCashVND = (total) => {
        return ('' + total).split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

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
            <td className={`${styles.tbodyRanked} `}>
                <span
                    className={`${styles.topThree}`}
                    style={stylesRanked}
                >{index + 1}</span>
            </td>
            <td className={`${styles.tbodyName}`} >{item.tkkh_hoten}</td>
            <td className={`${styles.tbodyAccount}`}>{item.dh_taikhoan}</td>
            <td className={`${styles.tbodyAmount}`}>{item.sodonhang}</td>
            <td className={`${styles.tbodyTotal}`}>{formatCashVND(item.total)}<sup>đ</sup></td>
            <td></td>
        </tr>
    );
}

export default ItemTopClient;