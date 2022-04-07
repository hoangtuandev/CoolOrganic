import { React } from 'react';
import { useCookies } from 'react-cookie';
import styles from './Products.module.scss'
import { FaShoppingBasket, FaSearchPlus } from "react-icons/fa"

function Product(props) {

    const { data } = props
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const imageProduct = require('../../images/' + data.sp_hinhanh)

    const handleSelectProduct = (data) => {
        removeCookie('idProduct')
        setCookie('idProduct', data.sp_id, { path: '/' })
        window.location.href = '/products/details'
        // handleRemoveCookiesIdProduct()
        // handleSetCookiesIdProduct(data.sp_id)
        // axios.post(baseURL + '/products/ProductById', { id: data.sp_id })
        //     .then((res) => {
        //         handleGetProductSelected(res.data[res.data.length - 1])
        //     })
    }

    return (
        // <Link to={`/products/details`} className={`${styles.linkRoute}`}>
        <li onClick={(e) => handleSelectProduct(data)}>
            <div className={`${styles.main} ${styles.linkRoute}`}>
                <div className={`${styles.boxOption}`}>
                    <span className={`${styles.optionShopping}`}><FaShoppingBasket /></span>
                    <span className={`${styles.optionView}`}>
                        <FaSearchPlus />
                    </span>
                </div>
                <div className={`${styles.productImage}`}>
                    <img src={imageProduct} alt="" />
                </div>
                <div className={`${styles.productName}`}>{data.sp_tensanpham}</div>
                <div className={`${styles.productPrice}`}>
                    {data.sp_gia / 1000}.000
                    <sup className={`${styles.priceUnit}`}>đ</sup>
                </div>
            </div>
        </li>
        // </Link >
    );
}

export default Product;