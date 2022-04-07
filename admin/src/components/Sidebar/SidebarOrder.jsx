import React from 'react';
import styles from './Sidebar.module.scss'
import { FcAcceptDatabase } from "react-icons/fc";

function SidebarOrder(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcAcceptDatabase />
            <span>Đơn hàng</span>
        </li>
    );
}

export default SidebarOrder;