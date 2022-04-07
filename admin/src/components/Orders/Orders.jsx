import { React, useState, useEffect } from 'react';
import axios from 'axios'
import styles from './Orders.module.scss'
import OrdersContent from './OrdersContent';
import OrdersHeader from './OrdersHeader';
import DetailOrder from './DetailOrder';

function Orders() {

    const baseUrl = 'http://localhost:3333'
    const [allOrders, setAllOrders] = useState([])
    const [isShowDetailOrder, setIsShowDetailOrder] = useState(false)
    const [orderSelectedView, setOrderSelectedView] = useState('')
    const [detailOrder, setDetailOrder] = useState({})
    const [listProductsOrder, setListProductsOrder] = useState([])

    const handleGetAllOrders = () => {
        axios.get(baseUrl + '/orders/allOrder', {})
            .then((res) => {
                setAllOrders(res.data)
            })
    }

    useEffect(() => {
        handleGetAllOrders()
    }, [])

    useEffect(() => {
        axios.post(baseUrl + '/detailOrder/getdetailOrder', { id: orderSelectedView })
            .then((res) => {
                setDetailOrder(res.data[res.data.length - 1])

                axios.post(baseUrl + '/detailOrder/getListProducts', { id: orderSelectedView })
                    .then((res) => {
                        setListProductsOrder(res.data)
                    })
            })
    }, [orderSelectedView])

    return (
        <div className={`${styles.orders}`}>
            <table className={`${styles.tableOrders}`}>
                <OrdersHeader></OrdersHeader>
                <tbody>
                    {
                        allOrders.map((item, index) => (
                            <OrdersContent
                                key={index}
                                item={item}
                                setIsShowDetailOrder={setIsShowDetailOrder}
                                setOrderSelectedView={setOrderSelectedView}
                                handleGetAllOrders={handleGetAllOrders}
                            >
                            </OrdersContent>
                        ))
                    }
                </tbody>
            </table>
            {
                isShowDetailOrder &&
                <DetailOrder
                    setIsShowDetailOrder={setIsShowDetailOrder}
                    orderSelectedView={orderSelectedView}
                    detailOrder={detailOrder}
                    listProductsOrder={listProductsOrder}
                ></DetailOrder>
            }
        </div>
    );
}

export default Orders;