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
                            <span>Số lượng có sẵn: </span>
                            <span className={`${styles.statusValue}`}>
                                {inforProduct.sp_tonkho} {inforProduct.sp_donvitinh}
                            </span>
                        </div>
                        <div className={`${styles.productPrice}`}>
                            <span>
                                {Math.floor((inforProduct.sp_gia) / 1000)}.
                                {`${(inforProduct.sp_gia) % 1000}00`.slice(0, 3)}
                            </span>
                            <sup>đ</sup>
                        </div>
                        <div className={`${styles.productOrigin}`}>
                            <span>Nguồn gốc:</span>
                            <span className={`${styles.originValue}`}>Úc</span>
                        </div>
                        <div className={`${styles.productDescription}`}>
                            Táo là loại cây ưa khí hậu khô, nóng và ít côn trùng và dịch bệnh. Táo Granny Smith (Táo Xanh) có nguồn gốc từ Úc du nhập vào Mỹ năm 1868. Táo có màu xanh lá, vị chua đậm, rất giòn, nhiều nước.
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
                            <label>Số lượng</label>
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
                                <span><FaShoppingBasket /></span> <span>THÊM VÀO GIỎ HÀNG</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                inforProduct &&
                <div className={`${styles.aboutProduct}`}>
                    <ul>
                        <li><button className={`${styles.buttonSelected}`} type='button'><div>THÔNG TIN SẢN PHẨM</div></button></li>
                        <li><button type='button'><div>HƯỚNG DẪN BẢO QUẢN</div></button></li>
                        <li><button type='button'><div>ĐÁNH GIÁ SẢN PHẨM</div></button></li>
                    </ul>

                    <div className={`${styles.inforationProduct}`}>
                        <div>
                            Hành không chỉ là thực phẩm rất gần gũi với con người mà nó còn là vị thuốc chữa bệnh rất công hiệu, tốt cho nhóm người mắc bệnh về đường hô hấp, bệnh hen suyễn, chữa chứng mất ngủ và làm giảm cholesterol.
                        </div> <br />
                        <div>
                            Các hợp chất tự nhiên có trong hành có tác dụng làm dịu những cơn ho, long đờm và khử đờm rất hiệu quả. Hành tây tốt cho nhóm người mắc bệnh hen suyễn, viêm phế quản, lao, viêm xoang và các chứng bệnh nhiễm trùng về đường hô hấp.
                        </div>
                        <div className={`${styles.contentImg}`}>{inforProduct && <img src={image} alt="" />}</div>
                        <div>
                            - Hành tây có tác dụng hạ huyết áp, có lợi cho tim mạch. <br /><br />

                            - Theo nghiên cứu thì hành tây có tác dụng giảm cholesterol (mỡ máu), giúp cho máu lưu thông tốt. Hạn chế cholesterol xấu và làm tăng cholesterol tốt (HDL). <br /><br />

                            - Hành tây là thực phẩm kiêm dược phẩm tốt cho hệ thống tiêu hoá, chống táo bón, đầy hơi và trào ngược axít dạ dày. <br /><br />

                            - Hành tây là thực phẩm tốt cho nhóm phụ nữ mắc bệnh mất kinh, vàng da và liệt sức vì nóng, vì vậy những người ốm mệt có thể ăn cháo hành và phát huy tác dụng tức thì.<br /><br />

                            - Hành các loại, kể cả hành tây có mức độ sát trùng rất mạnh, vì vậy có khả năng ngăn ngừa các chứng bệnh viêm nhiễm đường ruột rất hiệu quả.
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
                            <span>SẢN PHẨM TƯƠNG TỰ</span>
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