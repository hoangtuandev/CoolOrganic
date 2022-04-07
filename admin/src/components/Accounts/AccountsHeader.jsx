import React from 'react';
import styles from './Acounts.module.scss'

function AccountsHeader(props) {
    return (
        <thead>
            <tr className={`${styles.tableName}`}><td>Tất cả tài khoản</td></tr>
            <tr className={`${styles.ordersAmount}`}><td></td></tr>
            <tr className={`${styles.tableTitle}`}>
                <td>Tên đăng nhập</td>
                <td>Chủ sở hữu</td>
                <td>Quyền hạn</td>
                <td>Trạng thái</td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>
        </thead >
    );
}

export default AccountsHeader;