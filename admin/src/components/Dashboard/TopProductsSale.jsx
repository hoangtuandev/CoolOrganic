import { React, useState, useEffect } from 'react';
import styles from './Dashboard.module.scss'
import axios from 'axios';
import ItemTopProductsSaled from './ItemTopProductsSaled';

function TopProductsSale(props) {

    const baseUrl = 'http://localhost:3333'
    const [listTopProductsSaled, setListTOpProductsSaled] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/products/topProductsSaled', {})
            .then((res) => {
                setListTOpProductsSaled(res.data)
            })
    }, [])

    return (
        <div className={`${styles.topProductsSale}`}>
            <h3>SẢN PHẨM BÁN CHẠY NHẤT</h3>
            <table>
                <thead>
                    <tr>
                        <td className={`${styles.theadNull}`}></td>
                    </tr>
                    <tr>
                        <td className={`${styles.theadNull}`}></td>
                        <td className={`${styles.theadNull}`}></td>
                        <td className={`${styles.theadId}`}>Mã sản phẩm</td>
                        <td>Tên sản phẩm</td>
                        <td className={`${styles.theadSaled}`}>Đã bán</td>
                        <td className={`${styles.theadNull}`}></td>
                    </tr>
                </thead>
                <tbody>
                    {listTopProductsSaled.map((item, index) => (
                        <ItemTopProductsSaled
                            key={index}
                            index={index}
                            item={item}
                        ></ItemTopProductsSaled>
                    ))}
                </tbody>
            </table>


        </div>
    );
}

export default TopProductsSale;