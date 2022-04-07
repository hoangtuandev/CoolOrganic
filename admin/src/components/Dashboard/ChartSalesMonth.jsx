import { React, useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios'
import styles from './Dashboard.module.scss'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function ChartSalesMonth(props) {

    const baseUrl = 'http://localhost:3333'
    const [allYearFromOrders, setAllYearFromOrders] = useState([])
    const [salesOrdersMonths, setSalesOrdersMonths] = useState()

    useEffect(() => {
        axios.get(baseUrl + '/orders/allYearFromOrders', {})
            .then((res) => {
                setAllYearFromOrders(res.data)
            })

    }, [])

    const handleChangeYearSelected = (option) => {

        axios.post(baseUrl + '/orders/salesMonthly', { year: option.value })
            .then((res) => {
                // console.log(res.data)
                const [first, ...rest] = res.data
                rest.forEach((item) => {
                    Object.keys(item).forEach(key => first[key] += item[key]);
                })

                const result = Object.values(first)
                setSalesOrdersMonths(result)
            })

    }

    const options = allYearFromOrders

    const state = {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [
            {
                label: 'Doanh thu tháng',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1.5,
                data: salesOrdersMonths
            }
        ]
    }

    return (
        <div
            style={{ width: '1000px' }}
            className={`${styles.chartSalesMonth}`}
        >
            <h3>THỐNG KÊ DOANH THU </h3>
            <div className={`${styles.main}`}>
                <Select
                    className={`${styles.selectYear}`}
                    options={options}
                    onChange={handleChangeYearSelected}
                />

                <Bar
                    // width={100}
                    height={100}
                    data={state}
                />
            </div>

        </div>
    );
}

export default ChartSalesMonth;