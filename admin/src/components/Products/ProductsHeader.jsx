import React from 'react';
import styles from './Products.module.scss'

function ProductsHeader(props) {
    return (
        <thead>
            <tr className={`${styles.tableName}`}><td>Tất cả sản phẩm</td></tr>
            <tr className={`${styles.tableAmount}`}><td></td></tr>
            <tr className={`${styles.tableTitles}`}>
                <td className={`${styles.none}`}></td>
                <td><span>Mã sản phẩm</span></td>
                <td><span>Tên sản phẩm</span></td>
                <td className={`${styles.titleStyles}`}><span>Giá</span></td>
                <td className={`${styles.titleStyles}`}><span>Đơn vị tính</span></td>
                <td className={`${styles.titleStyles}`}><span>Tồn kho</span></td>
                <td className={`${styles.none}`}></td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>
        </thead>
    );
}

export default ProductsHeader;