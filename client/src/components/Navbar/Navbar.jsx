import React from 'react';
import { Link } from 'react-router-dom'
import { FaHome, FaBuffer, FaBuilding, FaTelegramPlane, FaGlobe } from "react-icons/fa";
import styles from './Navbar.module.scss'

function Navbar(props) {
    return (
        <div className={`${styles.navbar}`}>
            <ul className={`${styles.navbarMenu}`}>
                <Link to="/" className={`${styles.linkRoute}`}>
                    <li className={`${styles.menuItem}`}>
                        <span className={`${styles.itemIcon}`}><FaHome /></span>
                        <span className={`${styles.itemLabel}`}>Trang chủ</span>
                    </li>
                </Link>
                <li className={`${styles.menuItem}`}>
                    <span className={`${styles.itemIcon}`}><FaBuilding /></span>
                    <span className={`${styles.itemLabel}`}>Giới thiệu</span>
                </li>
                <Link to="/products" className={`${styles.linkRoute}`}>
                    <li className={`${styles.menuItem}`}>
                        <span className={`${styles.itemIcon}`}><FaBuffer /></span>
                        <span className={`${styles.itemLabel}`}>Sản phẩm</span>
                    </li>
                </Link>
                <li className={`${styles.menuItem}`}>
                    <span className={`${styles.itemIcon}`}><FaGlobe /></span>
                    <span className={`${styles.itemLabel}`}>Tin tức</span>
                </li>
                <li className={`${styles.menuItem}`}>
                    <span className={`${styles.itemIcon}`}><FaTelegramPlane /></span>
                    <span className={`${styles.itemLabel}`}>Liên hệ</span>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;