import React from 'react';
import styles from './Sidebar.module.scss'
import { FcConferenceCall } from "react-icons/fc";

function SidebarAccount(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcConferenceCall />
            <span>Tài khoản</span>
        </li>
    );
}

export default SidebarAccount;