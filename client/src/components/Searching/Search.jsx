import { React, useEffect } from 'react';
import styles from './Search.module.scss'
import Product from './Product';

function Search(props) {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const { searchProducts } = props

    return (
        <div className={`${styles.search}`}>
            <div></div>
            <div className={`${styles.searchMain}`}>
                <h2 className={`${styles.mainTitle}`}>
                    <span>KẾT QUẢ TÌM KIẾM</span>
                </h2>

                <div className={`${styles.mainProducts}`}>
                    <ul>
                        {
                            searchProducts.map((product, index) => (
                                <Product key={index} product={product}></Product>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div></div>
        </div >
    );
}

export default Search;