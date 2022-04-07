import React from 'react';
import styles from './Box.module.scss'
import { FaMinus, FaPlus } from "react-icons/fa";
import Product from '../../images/NhoUc.jpg'
import { FaShoppingBasket, FaCreditCard } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

function ViewProduct(props) {
    return (
        <div className={`${styles.box}`}>
            <div className={`${styles.contentBox}`}>
                <div className={`${styles.buttonClose}`}>
                    <button type='button'><span><RiCloseFill /></span></button>
                </div>
                <div className={`${styles.detailsLeft}`}>
                    <img src={Product} alt="" />
                </div>
                <div className={`${styles.detailsRight}`}>
                    <div className={`${styles.productName}`}>
                        Ten san pham
                    </div>
                    <div className={`${styles.productStatus}`}>
                        <span>Số lượng có sẵn: </span>
                        <span className={`${styles.statusValue}`}>20</span>
                    </div>
                    <div className={`${styles.productPrice}`}>
                        <span>100.000</span><sup>đ</sup>
                    </div>
                    <div className={`${styles.productOrigin}`}>
                        <span>Nguồn gốc:</span>
                        <span className={`${styles.originValue}`}>Úc</span>
                    </div>
                    <div className={`${styles.productDescription}`}>
                        Táo là loại cây ưa khí hậu khô, nóng và ít côn trùng và dịch bệnh. Táo Granny Smith (Táo Xanh) có nguồn gốc từ Úc du nhập vào Mỹ năm 1868. Táo có màu xanh lá, vị chua đậm, rất giòn, nhiều nước.
                    </div>
                    <div className={`${styles.productSetAmount}`}>
                        <label>Số lượng</label>
                        <button type='button'><FaMinus /></button>
                        <input type="text" />
                        <span>/</span>
                        <input type="text" />
                        <button type='button'><FaPlus /></button>
                    </div>
                    <div className={`${styles.productNode}`}><i>1 kilogam(kg) = 1000 gam(g)</i></div>
                    <div className={`${styles.productAddCart}`}>
                        <button type='button' className={`${styles.btnBuy}`}>
                            <span><FaCreditCard /></span> <span>MUA NGAY</span>
                        </button>
                        <button type='button'>
                            <span><FaShoppingBasket /></span> <span>THÊM VÀO GIỎ HÀNG</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;