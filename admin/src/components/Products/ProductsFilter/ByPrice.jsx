import React from 'react';
import { CgChevronDoubleDownO } from 'react-icons/cg'
import styles from '../Products.module.scss'

function ByPrice(props) {
    return (
        <div className={`${styles.byPrice}`}>
            <div className={`${styles.selected}`}>
                <label><CgChevronDoubleDownO /></label>
                <input type="text" placeholder='Lọc theo loại sản phẩm...' />
            </div>
            <ul className={`${styles.options}`}>
                <li>Trái cây</li>
                <li>Rau củ</li>
                <li>Thực phẩm nhập khẩu</li>
                <li>Thực phẩm tươi sống</li>
                <li>Thực phẩm khô</li>
            </ul>
        </div>
    );
}

export default ByPrice;