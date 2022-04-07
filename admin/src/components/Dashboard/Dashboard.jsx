import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.scss'
import EmptyProducts from './EmptyProducts';
import FiguresTotal from './FiguresTotal';
import TopClient from './TopClient';
import TopProductsSale from './TopProductsSale';
import ChartsOrders from './ChartsOrders';
import ChartSales from './ChartSalesMonth';

function Dashboard(props) {

    const baseUrl = 'http://localhost:3333'
    const [isShowEmptyProducts, setIsShowEmptyProducts] = useState(false)
    const [listEmptyProducts, setListEmptyProducts] = useState([])
    const [amountEmptyProducts, setAmontEmptyProducts] = useState()
    const [totalSales, setTotalSales] = useState('0')
    const [amountOrders, setAmontOrders] = useState()
    const [amountProdcts, setAmontProdcts] = useState()
    const [amountAccountClients, setAmountAccountClients] = useState(0)

    useEffect(() => {
        axios.get(baseUrl + '/products/emptyProducts', {})
            .then((res) => {
                setListEmptyProducts(res.data)
                setAmontEmptyProducts(res.data.length)
            })

        axios.get(baseUrl + '/orders/allOrder', {})
            .then((res) => {
                setAmontOrders(res.data.length)
            })

        axios.get(baseUrl + '/products', {})
            .then((res) => {
                setAmontProdcts(res.data.length)
            })

        axios.get(baseUrl + '/orders/totalSales', {})
            .then((res) => {
                // console.log(res.data[res.data.length - 1].TotalSales)
                setTotalSales(res.data[res.data.length - 1].TotalSales)
            })

        axios.get(baseUrl + '/client/allClient', {})
            .then((res) => {
                setAmountAccountClients(res.data.length)
            })
    }, [])

    return (
        <div className={`${styles.dashboard}`}>
            <div></div>
            <div className={`${styles.main}`}>
                <FiguresTotal
                    isShowEmptyProducts={isShowEmptyProducts}
                    setIsShowEmptyProducts={setIsShowEmptyProducts}
                    amountEmptyProducts={amountEmptyProducts}
                    amountOrders={amountOrders}
                    amountProdcts={amountProdcts}
                    totalSales={totalSales}
                    amountAccountClients={amountAccountClients}
                ></FiguresTotal>

                {
                    isShowEmptyProducts &&
                    <EmptyProducts
                        listEmptyProducts={listEmptyProducts}
                    ></EmptyProducts>
                }

                <ChartsOrders></ChartsOrders>

                <ChartSales></ChartSales>

                <TopClient></TopClient>

                <TopProductsSale></TopProductsSale>
            </div>
            <div></div>
        </div>
    );
}

export default Dashboard;