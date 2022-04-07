import { React, useState, useEffect, useRef } from 'react';
import axios from 'axios'
import styles from './Home.module.scss'
import Sale from '../../images/sale.png'
import ProductDiscount from './ProductDiscount';

function Discount(props) {

    const { handleGetProductSelected } = props

    const baseURL = 'http://localhost:3333'
    const [discountProducts, setDiscountProduct] = useState([])
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countDown = new Date('March 28, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDown - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            }
            else {
                setTimerDays(`0${days}`.slice(-2))
                setTimerHours(`0${hours}`.slice(-2))
                setTimerMinutes(`0${minutes}`.slice(-2))
                setTimerSeconds(`0${seconds}`.slice(-2))
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval)
        }
    })

    useEffect(() => {
        axios.get(baseURL + '/discountProducts', {})
            .then((res) => {
                setDiscountProduct(res.data)
            })
    }, [])

    return (
        <div className={`${styles.homeDiscount}`}>
            <div className={`${styles.discountTitle}`}>
                <span> <img src={Sale} alt="" /></span>
                <span className={`${styles.timerCount}`}>
                    <ul className={`${styles.timerClock}`}>
                        <li>{timerDays}</li>
                        <li className={`${styles.timerUnit}`}>NGÀY</li>
                    </ul>
                    <ul>
                        <li>:</li>
                    </ul>
                    <ul className={`${styles.timerClock}`}>
                        <li>{timerHours}</li>
                        <li className={`${styles.timerUnit}`}>GIỜ</li>
                    </ul>
                    <ul>
                        <li>:</li>
                    </ul>
                    <ul className={`${styles.timerClock}`}>
                        <li>{timerMinutes}</li>
                        <li className={`${styles.timerUnit}`}>PHÚT</li>
                    </ul>
                    <ul>
                        <li>:</li>
                    </ul>
                    <ul className={`${styles.timerClock} ${styles.clockSecond}`}>
                        <li>{timerSeconds}</li>
                        <li className={`${styles.timerUnit}`}>GIÂY</li>
                    </ul>
                </span>
            </div>
            <div className={`${styles.discountProducts}`}>
                <ul>
                    {
                        discountProducts.map((data, index) => (
                            <ProductDiscount
                                key={index} data={data}
                                handleGetProductSelected={handleGetProductSelected}
                            ></ProductDiscount>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Discount;