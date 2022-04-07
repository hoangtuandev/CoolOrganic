import React from 'react';
import styles from './Catagory.module.scss'

function CatagoryHeader(props) {
    return (
        <thead>
            <tr >
                <td className={`${styles.tableName}`}>Loại sản phẩm</td>
                <td></td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>

            <tr className={`${styles.tableTitles}`}>
                <td className={`${styles.titleId}`}><span>Số thứ tự</span></td>
                <td className={`${styles.titleName}`}><span>Tên loại</span></td>
                <td className={`${styles.none}`}></td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>
        </thead>
    );
}

export default CatagoryHeader;