import React from 'react';
import styles from './Sidebar.module.scss'
import { FcPuzzle } from "react-icons/fc";

function SidebarProduct(props) {
    return (
        <li className={`${styles.menuItem}`}>
            <FcPuzzle />
            <span>Sản phẩm</span>
        </li>
    );
}

export default SidebarProduct;