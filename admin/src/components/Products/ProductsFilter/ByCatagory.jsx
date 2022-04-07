import React from 'react';
import { CgChevronDoubleDownO } from 'react-icons/cg'
import styles from '../Products.module.scss'
import OptionsCatagory from './OptionsCatagory';

function ByCatagory(props) {
    return (
        <div className={`${styles.byCatagory}`}>
            <div className={`${styles.selected}`}>
                <label><CgChevronDoubleDownO /></label>
                <input type="text" placeholder='Lọc theo loại sản phẩm...' />
            </div>
            <OptionsCatagory></OptionsCatagory>
        </div>
    );
}

export default ByCatagory;