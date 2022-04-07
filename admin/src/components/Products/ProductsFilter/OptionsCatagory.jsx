import React from 'react';
import styles from '../Products.module.scss'

function OptionsCatagory(props) {
    return (
        <ul className={`${styles.options}`}>
            <li>Trái cây</li>
            <li>Rau củ</li>
            <li>Thực phẩm nhập khẩu</li>
            <li>Thực phẩm tươi sống</li>
            <li>Thực phẩm khô</li>
        </ul>
    );
}

export default OptionsCatagory;