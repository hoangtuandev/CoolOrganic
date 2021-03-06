import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from './DetailsProduct.module.scss'
import { FaShoppingBasket, FaCreditCard } from "react-icons/fa";
import SimilarProduct from './SimilarProduct';
import AlertAddCart from './AlertAddCart';

function DetailsProduct(props) {

    const { cookies, handleSetInforProductsOrder } = props
    const baseURL = 'http://localhost:3333'
    const [image, setImage] = useState()
    const [inforProduct, setInforProduct] = useState()
    const [amountProduct, setAmountProduct] = useState(1)
    const [similarProducts, setSimilarProducts] = useState([])
    const [unitAmount, setUnitAmount] = useState()
    const [isShowAlertAddCart, setIsShowAlertAddCart] = useState(false)

    const stylesSelect = {
        color: 'white',
        backgroundColor: '#00ae4a',
        border: '1px solid #00ae4a',
        transform: 'scale(1.1)',
        transition: 'ease-in-out.2s'
    }

    // var timeOutAddCart ;
    // const handleCloseAlertAddCart = () => {
    //     setIsShowAlertAddCart(false)
    // }
    //  timeOutAddCart = setTimeout(handleCloseAlertAddCart, 5000)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        if (inforProduct) {
            axios.post(baseURL + '/products/similarProduct', { catagory: inforProduct.sp_maloai })
                .then((res) => {
                    setSimilarProducts(res.data)
                })
        }
    }, [inforProduct])

    useEffect(() => {
        axios.post(baseURL + '/products/ProductById', { id: cookies.idProduct })
            .then((res) => {
                // console.log(res.data[res.data.length - 1])
                setInforProduct(res.data[res.data.length - 1])
            })
    }, [cookies])

    useEffect(() => {
        if (inforProduct) {
            const imgProduct = require(`../../images/${inforProduct.sp_hinhanh}`)
            setImage(imgProduct)
            setUnitAmount(1 + inforProduct.sp_donvitinh)
        }
    }, [inforProduct])


    // useEffect(() => {
    //     if (inforProduct.sp_hinhanh) {
    //         const imgProduct = require(`../../images/${inforProduct.sp_hinhanh}`)
    //         setImage(imgProduct)
    //         setUnitAmount(1 + inforProduct.sp_donvitinh)
    //     }

    //     axios.post(baseURL + '/products/similarProduct', { catagory: inforProduct.sp_maloai })
    //         .then((res) => {
    //             setSimilarProducts(res.data)
    //         })
    // }, [])

    const handleSelectUnitAmount = (unit) => {

        if (unit === 500) {
            setUnitAmount("500g")
        }
        else if (unit === 1000) {
            if (amountProduct > inforProduct.sp_tonkho) {
                setAmountProduct(inforProduct.sp_tonkho)
            }
            setUnitAmount("1kg")
        }
        else {
            console.log(inforProduct.sp_donvitinh)
            setUnitAmount(inforProduct.sp_donvitinh)
        }
    }

    const handleClickMinus = (amount) => {
        amount === 1 ? setAmountProduct(1) : setAmountProduct(amount - 1)
    }

    const handleClickPlus = (amount) => {
        if (unitAmount === '1kg') {
            amount >= inforProduct.sp_tonkho ? setAmountProduct(inforProduct.sp_tonkho) : setAmountProduct(amount + 1)
        }
        else if (unitAmount === '500g') {
            amount >= inforProduct.sp_tonkho * 2 ? setAmountProduct(inforProduct.sp_tonkho * 2) : setAmountProduct(amount + 1)
        }
        else {
            amount >= inforProduct.sp_tonkho ? setAmountProduct(inforProduct.sp_tonkho) : setAmountProduct(amount + 1)
        }
    }


    // const timeoutAddCart = () => {
    //     const timeout = setTimeout(setIsShowAlertAddCart(false), 5000)

    //     return timeout
    // }

    const handleAddCartShopping = () => {
        if (!cookies.phone) {
            window.location.href = '/login'
        }
        else {
            const price = unitAmount === '500g' ? inforProduct.sp_gia / 2 : inforProduct.sp_gia
            const randomid = Math.floor(Math.random() * 899999999) + 100000000
            const id = 'GH00' + randomid

            axios.post(baseURL + '/addProductCartShopping', {
                id,
                phone: cookies.phone,
                product: inforProduct.sp_id,
                unit: unitAmount,
                price,
                amount: amountProduct
            })
                .then((res) => {
                    setIsShowAlertAddCart(true)
                    // timeoutAddCart()
                })
        }
    }

    const handleClickPurchase = () => {
        if (!cookies.phone) {
            window.location.href = '/login'
        }

        let order = {
            idProduct: inforProduct.sp_id,
            nameProduct: inforProduct.sp_tensanpham,
            amountProduct,
            unitProduct: unitAmount,
            totalPrice: (unitAmount === '500g' ? inforProduct.sp_gia / 2 : inforProduct.sp_gia) * amountProduct,
            imageProduct: inforProduct.sp_hinhanh
        }
        handleSetInforProductsOrder(order)
    }

    return (
        <div className={`${styles.detailsProduct}`}>
            {
                isShowAlertAddCart &&
                <AlertAddCart
                    setIsShowAlertAddCart={setIsShowAlertAddCart}
                ></AlertAddCart>
            }

            {
                inforProduct &&
                <div className={`${styles.main}`}>
                    <div className={`${styles.detailsLeft}`}>
                        {inforProduct && <img src={image} alt="" />}

                    </div>
                    <div className={`${styles.detailsRight}`}>
                        <div className={`${styles.productName}`}>
                            {inforProduct.sp_tensanpham}
                        </div>
                        <div className={`${styles.productStatus}`}>
                            <span>S??? l?????ng c?? s???n: </span>
                            <span className={`${styles.statusValue}`}>
                                {inforProduct.sp_tonkho} {inforProduct.sp_donvitinh}
                            </span>
                        </div>
                        <div className={`${styles.productPrice}`}>
                            <span>
                                {Math.floor((inforProduct.sp_gia) / 1000)}.
                                {`${(inforProduct.sp_gia) % 1000}00`.slice(0, 3)}
                            </span>
                            <sup>??</sup>
                        </div>
                        <div className={`${styles.productOrigin}`}>
                            <span>Ngu???n g???c:</span>
                            <span className={`${styles.originValue}`}>??c</span>
                        </div>
                        <div className={`${styles.productDescription}`}>
                            T??o l?? lo???i c??y ??a kh?? h???u kh??, n??ng v?? ??t c??n tr??ng v?? d???ch b???nh. T??o Granny Smith (T??o Xanh) c?? ngu???n g???c t??? ??c du nh???p v??o M??? n??m 1868. T??o c?? m??u xanh l??, v??? chua ?????m, r???t gi??n, nhi???u n?????c.
                        </div>
                        {
                            (inforProduct.sp_donvitinh) === 'Kg' &&
                            <div className={`${styles.unitAmount}`}>
                                <button
                                    type="button"
                                    style={unitAmount === '500g' ? stylesSelect : {}}
                                    onClick={() => handleSelectUnitAmount(500)}
                                >500g</button>
                                <button
                                    type="button"
                                    style={unitAmount === '1kg' ? stylesSelect : {}}
                                    onClick={() => handleSelectUnitAmount(1000)}
                                >1kg</button>
                            </div>
                        }
                        <div className={`${styles.productSetAmount}`}>
                            <label>S??? l?????ng</label>
                            <button
                                type='button'
                                onClick={(e) => handleClickMinus(amountProduct)}
                            ><FaMinus /></button>
                            <input
                                type="text" value={amountProduct}
                                onChange={(e) => setAmountProduct(e.target.value)}
                            />
                            <button
                                type='button'
                                onClick={(e) => handleClickPlus(amountProduct)}
                            ><FaPlus /></button>
                        </div>
                        <div
                            className={`${styles.productAddCart}`}
                        >
                            <Link to="/checkout" className={`${styles.linkRouter}`}>
                                <button
                                    type='button' className={`${styles.btnBuy}`}
                                    onClick={handleClickPurchase}
                                >
                                    <span><FaCreditCard /></span> <span>MUA NGAY</span>
                                </button>
                            </Link>

                            <button
                                type='button'
                                onClick={handleAddCartShopping}
                            >
                                <span><FaShoppingBasket /></span> <span>TH??M V??O GI??? H??NG</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                inforProduct &&
                <div className={`${styles.aboutProduct}`}>
                    <ul>
                        <li><button className={`${styles.buttonSelected}`} type='button'><div>TH??NG TIN S???N PH???M</div></button></li>
                        <li><button type='button'><div>H?????NG D???N B???O QU???N</div></button></li>
                        <li><button type='button'><div>????NH GI?? S???N PH???M</div></button></li>
                    </ul>

                    <div className={`${styles.inforationProduct}`}>
                        <div>
                            H??nh kh??ng ch??? l?? th???c ph???m r???t g???n g??i v???i con ng?????i m?? n?? c??n l?? v??? thu???c ch???a b???nh r???t c??ng hi???u, t???t cho nh??m ng?????i m???c b???nh v??? ???????ng h?? h???p, b???nh hen suy???n, ch???a ch???ng m???t ng??? v?? l??m gi???m cholesterol.
                        </div> <br />
                        <div>
                            C??c h???p ch???t t??? nhi??n c?? trong h??nh c?? t??c d???ng l??m d???u nh???ng c??n ho, long ?????m v?? kh??? ?????m r???t hi???u qu???. H??nh t??y t???t cho nh??m ng?????i m???c b???nh hen suy???n, vi??m ph??? qu???n, lao, vi??m xoang v?? c??c ch???ng b???nh nhi???m tr??ng v??? ???????ng h?? h???p.
                        </div>
                        <div className={`${styles.contentImg}`}>{inforProduct && <img src={image} alt="" />}</div>
                        <div>
                            - H??nh t??y c?? t??c d???ng h??? huy???t ??p, c?? l???i cho tim m???ch. <br /><br />

                            - Theo nghi??n c???u th?? h??nh t??y c?? t??c d???ng gi???m cholesterol (m??? m??u), gi??p cho m??u l??u th??ng t???t. H???n ch??? cholesterol x???u v?? l??m t??ng cholesterol t???t (HDL). <br /><br />

                            - H??nh t??y l?? th???c ph???m ki??m d?????c ph???m t???t cho h??? th???ng ti??u ho??, ch???ng t??o b??n, ?????y h??i v?? tr??o ng?????c ax??t d??? d??y. <br /><br />

                            - H??nh t??y l?? th???c ph???m t???t cho nh??m ph??? n??? m???c b???nh m???t kinh, v??ng da v?? li???t s???c v?? n??ng, v?? v???y nh???ng ng?????i ???m m???t c?? th??? ??n ch??o h??nh v?? ph??t huy t??c d???ng t???c th??.<br /><br />

                            - H??nh c??c lo???i, k??? c??? h??nh t??y c?? m???c ????? s??t tr??ng r???t m???nh, v?? v???y c?? kh??? n??ng ng??n ng???a c??c ch???ng b???nh vi??m nhi???m ???????ng ru???t r???t hi???u qu???.
                        </div>
                    </div>

                    <div className={`${styles.guideProtect}`}>

                    </div>
                </div>
            }

            {
                inforProduct &&
                <div className={`${styles.productsLike}`}>
                    <div></div>
                    <div className={`${styles.productsList}`}>
                        <h2 className={`${styles.productTitle}`}>
                            <span>S???N PH???M T????NG T???</span>
                        </h2>
                        <ul>
                            {
                                similarProducts.map((product, index) => (
                                    <SimilarProduct
                                        key={index}
                                        product={product}
                                    ></SimilarProduct>
                                ))
                            }
                        </ul>
                    </div>
                    <div></div>
                </div>
            }

        </div >
    );
}

export default DetailsProduct;