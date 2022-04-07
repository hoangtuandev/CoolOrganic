import React from 'react';
import styles from './Menu.module.scss'
import { ImSearch } from "react-icons/im";

function MenuSearch() {
    return (
        <div className={`${styles.menuSearch}`}>
            <input type="text" placeholder=' ' />
            <label >Bạn muốn tìm gì ?</label>
            <span><ImSearch style={{ color: 'green' }} /></span>
        </div>
    );
}

export default MenuSearch;