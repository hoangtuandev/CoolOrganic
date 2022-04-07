import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './Dashboard.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartsOrders(props) {

    const baseUrl = 'http://localhost:3333'
    const [amountOrdersCancel, setAmountOrdersCancel] = useState(0)
    const [amountOrdersSuccess, setAmountOrdersSuccess] = useState(0)
    const [amountOrdersProccing, setAmountOrdersProccing] = useState(0)

    useEffect(() => {
        axios.get(baseUrl + '/orders/amountOrdersCancel', {})
            .then((res) => {
                setAmountOrdersCancel(res.data[res.data.length - 1].amount)
            })
        axios.get(baseUrl + '/orders/amountOrdersSuccess', {})
            .then((res) => {
                setAmountOrdersSuccess(res.data[res.data.length - 1].amount)
            })

        axios.get(baseUrl + '/orders/amountOrdersProcessing', {})
            .then((res) => {
                setAmountOrdersProccing(res.data[res.data.length - 1].amount)
            })
    }, [])

    const data = {
        labels: [
            'Bị hủy',
            'Thành công',
            'Đang xử lý'
        ],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],

                data: [amountOrdersCancel, amountOrdersSuccess, amountOrdersProccing]
            }
        ]
    }

    return (

        <div
            className={`${styles.chartsOrders}`}
            style={{ width: '750px' }}>

            <h3>THỐNG KÊ ĐƠN HÀNG</h3>

            <div className={`${styles.main}`}>
                <Doughnut
                    data={data}
                    width={200}
                    height={150}
                />
            </div>
        </div>
    );
}

export default ChartsOrders;