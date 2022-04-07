import { React, useState, useEffect } from 'react';
import styles from './Home.module.scss'
import { FaCaretRight, FaCheckDouble } from "react-icons/fa";
//import BannerHome from '../../images/banner_home_1.png'
//import BannerHome from '../../images/banner_home_4.jpg'

function Banner(props) {

    var ImagesBanner = ['banner_home_1.png', 'banner_home_2.jpg', 'banner_home_3.jpg', 'banner_home_4.jpg']
    const [currentImg, setCurrentImg] = useState('banner_home_1.png')

    var BannerHome = require(`../../images/${currentImg}`)


    useEffect(() => {
        const randomImage = setInterval(() => {
            let index = Math.trunc(Math.random() * 4)
            setCurrentImg(ImagesBanner[index])
        }, 3000);

        return () => clearInterval(randomImage);
    }, []);

    return (
        <div className={`${styles.homeBanner}`}>
            <div className={`${styles.bannerLeft}`}>
                <div className={`${styles.title}`}>Cool Organic</div>
                <div className={`${styles.description}`}>Thực phẩm hữa cơ</div>
                <div className={`${styles.standard}`}>
                    <span className={`${styles.standardAmount}`}>03</span>
                    <span>
                        <span className={`${styles.standardTitle}`}>Tiêu chí hàng đầu</span>
                        <ul>
                            <li><span><FaCheckDouble /></span>Không sử dụng hóa chất</li>
                            <li><span><FaCheckDouble /></span>An toàn sức khỏe</li>
                            <li><span><FaCheckDouble /></span>Giao hàng tận nơi</li>
                        </ul>
                    </span>
                </div>
                <button className={`${styles.btnLink}`}>
                    <span>XEM NGAY</span>
                    <span className={`${styles.btnIcon}`}><FaCaretRight /></span>
                </button>
            </div>
            <div className={`${styles.bannerRight}`}>
                <img src={BannerHome} alt="" />
            </div>
        </div>
    );
}

export default Banner;