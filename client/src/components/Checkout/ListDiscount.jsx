import { React, useEffect, useState } from 'react';
import axios from 'axios'
import styles from './Checkout.module.scss'
import ItemDiscount from './ItemDiscount';

function ListDiscount(props) {

    const { setIsShowListDiscount, inforProductsOrder, setCodeDiscount, setCostDiscount } = props
    const baseURL = 'http://localhost:3333'
    const [listDiscount, setListDiscount] = useState([])
    const [totalOrder, setTotalOrder] = useState(0)

    const handleCloseListDiscount = () => {
        setIsShowListDiscount(false)
    }

    useEffect(() => {
        let total = 0
        inforProductsOrder.map((data, index) => (
            total += data.totalPrice
        ))
        setTotalOrder(total)

        axios.post(baseURL + '/discounts/getAllDiscounts', { price: total })
            .then((res) => {
                setListDiscount(res.data)
            })
    }, [])

    return (
        <div className={styles.listDiscount}>
            <div className={`${styles.main}`}>
                <button
                    className={`${styles.btnClose}`} type='button'
                    onClick={handleCloseListDiscount}
                >
                    <span>X</span>
                </button>
                <ul>
                    {
                        listDiscount.map((item, index) => (
                            <ItemDiscount
                                key={index} data={item}
                                setCodeDiscount={setCodeDiscount}
                                setIsShowListDiscount={setIsShowListDiscount}
                                setCostDiscount={setCostDiscount}
                                totalOrder={totalOrder}
                            ></ItemDiscount>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListDiscount;