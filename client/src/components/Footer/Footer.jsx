import React from 'react';
import styles from './Footer.module.scss'
import Logo from '../../images/logo_coolorganic.png'
import { FaTwitter, FaFacebook, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FcCallback, FcFeedback, FcShop } from "react-icons/fc";

function Footer(props) {
    return (
        <div className={`${styles.footerHome}`}>
            <div></div>
            <div className={`${styles.footerMain}`}>
                <div className={`${styles.footerLeft}`}>
                    <img src={Logo} alt="" />
                    <div className={`${styles.standard}`}>
                        <span className={`${styles.standardAmount}`}>03</span>
                        <span>
                            <span className={`${styles.standardTitle}`}>Tiêu chí hàng đầu</span>
                            <ul>
                                <li><span></span>Không sử dụng hóa chất</li>
                                <li><span></span>An toàn sức khỏe</li>
                                <li><span></span>Giao hàng tận nơi</li>
                            </ul>
                        </span>
                    </div>
                    <div className={`${styles.btn}`}>
                        <button className={`${styles.btnRegister}`}>ĐĂNG KÝ</button>
                        <button className={`${styles.btnLogin}`}>ĐĂNG NHẬP</button>
                    </div>
                </div>
                <div className={`${styles.footerMidle}`}>
                    <ul>
                        <li>TRANG CHỦ</li>
                        <li>GIỚI THIỆU</li>
                        <li>SẢN PHẨM</li>
                        <li>TIN TỨC</li>
                        <li>LIÊN HỆ</li>
                    </ul>
                </div>
                <div className={`${styles.footerRight}`}>
                    <ul className={`${styles.location}`}>
                        <li>
                            <span className={`${styles.locateIcon}`}><FcCallback></FcCallback></span>
                            <span>0901234567 - 0307654321</span>
                        </li>
                        <li>
                            <span className={`${styles.locateIcon}`}><FcFeedback /></span>
                            <span>coolorganic@gmail.com.vn</span>
                        </li>
                        <li>
                            <span className={`${styles.locateIcon}`}><FcShop /></span>
                            <span>Khoa Công nghệ thông tin và Truyền thông</span>
                        </li>
                    </ul>
                    <ul className={`${styles.media}`}>
                        <li><FaFacebook /></li>
                        <li><FaTwitter /></li>
                        <li><FaInstagram /></li>
                        <li><FaPinterestP /></li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Footer;