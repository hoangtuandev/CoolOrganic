import { React, useState, useEffect } from 'react';
import axios from 'axios'
import styles from './Orders.module.scss'
import ItemOrder from './ItemOrder';
import DetailOrder from './DetailOrder';

function Orders(props) {

    const { cookies } = props
    const baseURL = 'http://localhost:3333'
    const [listOrders, setListOrders] = useState([])
    const [isShowDetailOrder, setIsShowDetailOrder] = useState(false)
    const [orderSelected, setOrderSelected] = useState('')
    const [inforDetailOrder, setInforDetailOrder] = useState()
    const [listProductDetailOrder, setListProductDetailOrder] = useState()

    useEffect(() => {
        axios.post(baseURL + '/orders/OrdersByAccount', { account: cookies.phone })
            .then((res) => {
                setListOrders(res.data)
            })
    }, [cookies.phone])

    useEffect(() => {
        axios.post(baseURL + '/detailOrder/getdetailOrder', { id: orderSelected })
            .then((res) => {
                setInforDetailOrder(res.data[res.data.length - 1])
            })

        axios.post(baseURL + '/detailOrder/getListProducts', { id: orderSelected })
            .then((res) => {
                setListProductDetailOrder(res.data)
            })
    }, [orderSelected])

    return (
        <div className={`${styles.orders}`}>
            <h2 >
                <span>ĐƠN HÀNG CỦA BẠN</span>
                <ul className={`${styles.listOrders}`}>
                    {
                        listOrders &&
                        listOrders.map((item, index) => (
                            <ItemOrder
                                key={index}
                                item={item}
                                setIsShowDetailOrder={setIsShowDetailOrder}
                                setOrderSelected={setOrderSelected}
                            ></ItemOrder>

                        ))
                    }
                </ul>
            </h2>
            {
                isShowDetailOrder &&
                <DetailOrder
                    setIsShowDetailOrder={setIsShowDetailOrder}
                    inforDetailOrder={inforDetailOrder}
                    listProductDetailOrder={listProductDetailOrder}
                ></DetailOrder>
            }

        </div >
    );
}

export default Orders;