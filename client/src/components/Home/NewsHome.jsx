import React from 'react';
import styles from './Home.module.scss'
import News1 from '../../images/bg_news_1.jpg'
import { FcOvertime, FcNews } from "react-icons/fc";

function NewsHome(props) {
    return (
        <div className={styles.newsHome}>

            <p><span className={styles.newsIcon}><FcNews /></span><span>TIN TỨC</span></p>
            <ul className={`${styles.newsMain}`}>
                <li>
                    <div className={`${styles.newsBackround}`}>
                        <img src={News1} alt="" />
                    </div>
                    <div className={`${styles.newsContent}`}>
                        <div className={`${styles.contentTitle}`}>Hướng dẫn làm Pizza chuẩn vị Ý</div>
                        <div className={`${styles.contentDescription}`}>
                            Bạn từng nghĩ làm bánh pizza thì cầu kỳ, phức tạp và chẳng thể nào ngon như ở ngoài cửa hàng ? Với những hướng dẫn...
                        </div>
                        <div className={`${styles.contentDate}`}>
                            <span className={`${styles.dateIcon}`}> <FcOvertime /></span>
                            <span>30/02/2022</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={`${styles.newsBackround}`}>
                        <img src={News1} alt="" />
                    </div>
                    <div className={`${styles.newsContent}`}>
                        <div className={`${styles.contentTitle}`}>Hướng dẫn làm Pizza chuẩn vị Ý</div>
                        <div className={`${styles.contentDescription}`}>
                            Bạn từng nghĩ làm bánh pizza thì cầu kỳ, phức tạp và chẳng thể nào ngon như ở ngoài cửa hàng ? Với những hướng dẫn...
                        </div>
                        <div className={`${styles.contentDate}`}>
                            <span className={`${styles.dateIcon}`}> <FcOvertime /></span>
                            <span>30/02/2022</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={`${styles.newsBackround}`}>
                        <img src={News1} alt="" />
                    </div>
                    <div className={`${styles.newsContent}`}>
                        <div className={`${styles.contentTitle}`}>Hướng dẫn làm Pizza chuẩn vị Ý</div>
                        <div className={`${styles.contentDescription}`}>
                            Bạn từng nghĩ làm bánh pizza thì cầu kỳ, phức tạp và chẳng thể nào ngon như ở ngoài cửa hàng ? Với những hướng dẫn...
                        </div>
                        <div className={`${styles.contentDate}`}>
                            <span className={`${styles.dateIcon}`}> <FcOvertime /></span>
                            <span>30/02/2022</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default NewsHome;