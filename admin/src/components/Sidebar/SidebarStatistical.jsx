import React from 'react';
import styles from './Sidebar.module.scss'
import { FcSalesPerformance } from "react-icons/fc";

function SidebarStatistical(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcSalesPerformance />
            <span>Thống kê</span>
        </li>
    );
}

export default SidebarStatistical;