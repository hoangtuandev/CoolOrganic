import React from 'react';
import styles from './Sidebar.module.scss'
import { FcHome } from "react-icons/fc";

function SidebarDashboard(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcHome />
            <span>Dashboard</span>
        </li>
    );
}

export default SidebarDashboard;