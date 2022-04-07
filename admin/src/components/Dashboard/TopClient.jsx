import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Dashboard.module.scss'
import ItemTopClient from './ItemTopClient';

function TopClient(props) {

    const baseUrl = 'http://localhost:3333'
    const [listTopClient, setListTopClient] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/client/topClientPurchase', {})
            .then((res) => {

                setListTopClient(res.data)
            })
    }, [])

    return (
        <div className={`${styles.topClient}`}>
            <h3>KHÁCH HÀNG THÂN THIẾT</h3>
            <table>
                <thead>
                    <tr>
                        <td className={`${styles.theadNull}`}></td>
                    </tr>
                    <tr>
                        <td className={`${styles.theadRanked}`}></td>
                        <td className={`${styles.theadName}`}>Họ tên</td>
                        <td>Tài khoản</td>
                        <td>Số đơn hàng</td>
                        <td className={`${styles.theadTotal}`}>Tổng giá trị</td>
                        <td className={`${styles.theadNull}`}></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    {
                        listTopClient.map((item, index) => (
                            <ItemTopClient
                                key={index}
                                index={index}
                                item={item}
                            ></ItemTopClient>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default TopClient;