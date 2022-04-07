import React from 'react';
import axios from 'axios'
import styles from './Products.module.scss'
import MenuCatagory from './MenuCatagory';
import Product from './Product';
import { useState, useEffect } from 'react';

function Vegetables(props) {

    const { handleGetProductSelected } = props
    const baseURL = 'http://localhost:3333'
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.post(baseURL + '/vegetables', { catagory: 'LSP0002' })
            .then((res) => {
                setAllProducts(res.data)
            })
    }, [])

    return (
        <div className={`${styles.productsHome}`}>
            <MenuCatagory></MenuCatagory>

            <div className={`${styles.products}`}>
                <div></div>
                <div className={`${styles.productsList}`}>
                    <h2 className={`${styles.productTitle}`}>
                        <span>RAU CỦ SẠCH</span>
                    </h2>
                    <ul>
                        {
                            allProducts.map((product, index) => (
                                <Product
                                    key={index} data={product}
                                    handleGetProductSelected={handleGetProductSelected}
                                ></Product>
                            ))
                        }
                    </ul>
                </div>
                <div></div>
            </div>

        </div >
    );
}

export default Vegetables;