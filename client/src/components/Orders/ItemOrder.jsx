import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { FcInTransit, FcMediumPriority, FcCheckmark, FcHighPriority, FcInspection } from "react-icons/fc";
import styles from './Orders.module.scss'
import ImageProduct from './ImageProduct';


function ItemOrder(props) {

    const { item, setIsShowDetailOrder, setOrderSelected } = props
    const baseURL = 'http://localhost:3333'
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        axios.post(baseURL + '/detailOrder/getListProducts', { id: item.dh_id })
            .then((res) => {
                setListProducts(res.data)
            })
    }, [item])

    const handdleOpenDetailOrder = () => {
        setIsShowDetailOrder(true)
        setOrderSelected(item.dh_id)

    }

    return (
        <li className={`${styles.itemOrder}`}>
            <h6 className={`${styles.idOrder}`}>{item.dh_id}</h6>
            <div className={`${styles.iconState}`}>
                {
                    item.dh_trangthai === 'CHOXACNHAN' ? <FcMediumPriority />
                        : item.dh_trangthai === 'DAHUY' ? <FcHighPriority />
                            : item.dh_trangthai === 'DANGGIAO' ? <FcInTransit />
                                : item.dh_trangthai === 'THANHCONG' ? <FcCheckmark />
                                    : <FcInspection />
                }
            </div>
            <div className={`${styles.inforOrder}`}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={`${styles.titleInfor}`}>Ngày đặt hàng</td>
                            <td>{item.dh_ngaydathang}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.titleInfor}`}>Thanh toán</td>
                            <td>
                                {Math.floor((item.dh_thanhtoan) / 1000)}.
                                {`${(item.dh_thanhtoan) % 1000}00`.slice(0, 3)}
                                <sup>đ</sup>
                            </td>
                        </tr>
                        <tr>
                            <td className={`${styles.titleInfor}`}>Trạng thái</td>
                            <td>{item.ttdh_trangthai}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className={`${styles.listImgProducts}`}>
                {
                    listProducts &&
                    listProducts.map((item, index) => (
                        <ImageProduct
                            key={index}
                            item={item}
                        ></ImageProduct>
                    ))
                }
            </ul>
            <button type='button'
                onClick={handdleOpenDetailOrder}
            >
                XEM CHI TIẾT
            </button>
        </li>
    );
}

export default ItemOrder;