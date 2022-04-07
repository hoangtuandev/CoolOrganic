import React from 'react';
import styles from '../Products.module.scss'
import ByCatagory from './ByCatagory';
import ByPrice from './ByPrice';

function ProductsFilter() {
    return (
        <div className={`${styles.filterProducts}`}>
            <ByCatagory></ByCatagory>
            <ByPrice></ByPrice>
        </div>
    );
}

export default ProductsFilter;