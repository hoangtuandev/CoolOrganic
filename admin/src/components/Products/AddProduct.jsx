import { React, useState } from 'react';
import styles from './Products.module.scss'
import FormAddProduct from './FormAddProduct';
import { FaPlus } from "react-icons/fa";

function AddProduct(props) {
    const { getAllProducts } = props
    const [isShowFormAddProduct, setIsShowFormProduct] = useState(false)

    const handleShowFormAddProduct = () => {
        setIsShowFormProduct(!isShowFormAddProduct)
    }

    return (
        <div className={`${styles.addProduct}`}>
            <button
                className={`${styles.buttonAdd}`}
                onClick={handleShowFormAddProduct}
            >
                <span><FaPlus /></span> THÊM SẢN PHẨM
            </button>

            <div className={`${styles.addFromProduct}`}>
                {isShowFormAddProduct &&
                    <FormAddProduct
                        getAllProducts={getAllProducts}
                        handleShowFormAddProduct={handleShowFormAddProduct}
                    >
                    </FormAddProduct>}
            </div>
        </div >
    );
}

export default AddProduct;