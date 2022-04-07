import { React } from 'react';
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegMoneyBillAlt, FaAppleAlt, FaDropbox } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import styles from './Dashboard.module.scss'

function FiguresTotal(props) {

    const { isShowEmptyProducts,
        setIsShowEmptyProducts,
        amountEmptyProducts,
        amountOrders,
        amountProdcts,
        totalSales,
        amountAccountClients
    } = props

    const formatCashVND = (total) => {
        return ('' + total).split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    const handleClickEmptyProducts = () => {
        setIsShowEmptyProducts(!isShowEmptyProducts)
    }

    return (
        <ul className={`${styles.figuresTotal}`}>
            <li className={`${styles.figuresItem} ${styles.salesItem}`}>
                <div className={`${styles.content}`}>
                    <span className={`${styles.numberContent}`}>
                        {formatCashVND(totalSales)}
                        <sup>đ</sup>
                    </span>
                    <span className={`${styles.labelContent}`}>Tổng doanh thu</span>
                </div>
                <div className={`${styles.icon}`}>
                    <FaRegMoneyBillAlt />
                </div>
            </li>
            <Link to='/orders' >
                <li className={`${styles.figuresItem}`}>
                    <div className={`${styles.content}`}>
                        <span className={`${styles.numberContent}`}>{amountOrders}</span>
                        <span className={`${styles.labelContent}`}>Tổng đơn hàng</span>
                    </div>
                    <div className={`${styles.icon}`}>
                        <TiShoppingCart />
                    </div>
                </li>
            </Link>
            <li className={`${styles.figuresItem} ${styles.userItem}`}>
                <div className={`${styles.content}`}>
                    <span className={`${styles.numberContent}`}>{amountAccountClients}</span>
                    <span className={`${styles.labelContent}`}>Người dùng mới</span>
                </div>
                <div className={`${styles.icon}`}>
                    <HiUser />
                </div>
            </li>
            <li className={`${styles.figuresItem} ${styles.productsItem}`}>
                <div className={`${styles.content}`}>
                    <span className={`${styles.numberContent}`}>{amountProdcts}</span>
                    <span className={`${styles.labelContent}`}>Sản phẩm</span>
                </div>
                <div className={`${styles.icon}`}>
                    <FaAppleAlt />
                </div>
            </li>
            <li
                className={`${styles.figuresItem} ${styles.emptyProductItem}`}
                onClick={handleClickEmptyProducts}
            >
                <div className={`${styles.content}`}>
                    <span className={`${styles.numberContent}`}>{amountEmptyProducts}</span>
                    <span className={`${styles.labelContent}`}>Sản phẩm hết hàng</span>
                </div>
                <div className={`${styles.icon}`}>
                    <FaDropbox />
                </div>
            </li>
        </ul>
    );
}

export default FiguresTotal;