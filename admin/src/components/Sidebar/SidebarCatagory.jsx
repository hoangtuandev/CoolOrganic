import React from 'react';
import styles from './Sidebar.module.scss'
import { FcList } from "react-icons/fc";

function SidebarCatagory(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcList />
            <span>Loại sản phẩm</span>
            {/* <ul>
                        <li>Sản phẩm</li>
                        <li>Tài khoản</li>
                        <li>Đơn hàng</li>
                    </ul> */}
        </li>
    );
}

export default SidebarCatagory;