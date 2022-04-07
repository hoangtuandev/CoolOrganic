import { React, useEffect, useState } from 'react';
import axios from 'axios'
import Product from './Product';
import styles from './Home.module.scss'

function ProductList(props) {

    const { catagory, title, handleGetProductSelected } = props
    const baseURL = 'http://localhost:3333'
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        axios.post(baseURL + '/products/getLimitFour', { catagory: catagory })
            .then((res) => {
                setProductsList(res.data)
            })
    }, [])



    return (
        <div className={`${styles.fruitHome}`}>
            <h2 className={`${styles.fruitTitle}`}>
                <span>{title}</span>
            </h2>

            <div className={`${styles.fruitProducts}`}>
                <ul>
                    {
                        productsList.map((product, index) => (
                            <Product
                                key={index}
                                product={product}
                                handleGetProductSelected={handleGetProductSelected}
                            ></Product>
                        ))
                    }

                </ul>
            </div>
        </div>
    );
}

export default ProductList;