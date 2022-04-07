import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Products.module.scss'
import NuocEp from '../../images/cate_6.jpg'
import TraiCay from '../../images/trai_cay.jpg'
import ThucPhamKho from '../../images/thuc_pham_kho.jpg'
import ThitTuoiSong from '../../images/thit_tuoi_song.jpg'
import RauCu from '../../images/rau_cu_qua.jpg'
import Khac from '../../images/trung_va_bo.jpg'

function MenuCatagory(props) {
    return (
        <div className={`${styles.productsCatagory}`}>
            <div></div>
            <ul>
                <Link to="/fruits" className={`${styles.linkRoute}`}>
                    <li>
                        <img src={TraiCay} alt="" />
                        <div className={`${styles.label}`}>Trái cây</div>
                    </li>
                </Link>
                <Link to="/vegetables" className={`${styles.linkRoute}`}>
                    <li>
                        <img src={RauCu} alt="" />
                        <div className={`${styles.label}`}>Rau củ</div>
                    </li>
                </Link>
                <Link to="/meats" className={`${styles.linkRoute}`}>
                    <li>
                        <img src={ThitTuoiSong} alt="" />
                        <div className={`${styles.label}`}>Thịt tươi</div>
                    </li>
                </Link>
                <Link to="/drys" className={`${styles.linkRoute}`}>
                    <li>
                        <img src={ThucPhamKho} alt="" />
                        <div className={`${styles.label}`}>Thực phẩm khô</div>
                    </li>
                </Link>
                <Link to="/juices" className={`${styles.linkRoute}`}>
                    <li>
                        <img src={NuocEp} alt="" />
                        <div className={`${styles.label}`}>Nước ép</div>
                    </li>
                </Link>

                <li>
                    <img src={Khac} alt="" />
                    <div className={`${styles.label}`}>Khác</div>
                </li>

            </ul>

            <div></div>

        </div >
    );
}

export default MenuCatagory;