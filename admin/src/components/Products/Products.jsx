import { React, useState, useEffect } from 'react';
import axios from 'axios'
import styles from './Products.module.scss'
import ProductsContent from './ProductsContent';
import ProductsHeader from './ProductsHeader';
import AddProduct from './AddProduct';
import UpdateProduct from '../PromptBox/UpdateProduct'
import PromptDelete from '../PromptBox/PromptDelete'
import PaginationProducts from './PaginationProducts';


function Products() {

    const baseUrl = 'http://localhost:3333'
    const [page, setPage] = useState(1);
    const [allProductsList, setAllProductList] = useState([])
    const [isShowPromptDelete, setIsShowPromptDelete] = useState(false)
    const [isShowPromptUpdate, setIsShowPromptUpdate] = useState(false)
    const [inforProduct, setInforProduct] = useState({})
    const [isDeleteProduct, setIsDeleteProduct] = useState(false)
    const [inforProductUpdate, setInforProductUpdate] = useState({})

    useEffect(() => {
        axios.get(baseUrl + '/products', {})
            .then((res) => {
                setAllProductList((res.data).slice(page * 10 - 10, page * 10))
            })
    }, [])

    const getAllProducts = () => {
        axios.get(baseUrl + '/products', {})
            .then((res) => {
                setAllProductList((res.data).slice(page * 10 - 10, page * 10))
            })
    }

    useEffect(() => {
        getAllProducts()
    }, [page])

    const handleIsShowPromptUpdate = (id, name, avatar, price, unit, stock, catagory) => {
        setIsShowPromptUpdate(!isShowPromptUpdate)
        setInforProductUpdate({ id, name, avatar, price, unit, stock, catagory })
    }

    const handleShowPromptDelete = (avatar, id, name) => {
        setIsShowPromptDelete(!isShowPromptDelete)
        setInforProduct({ avatar, id, name })
        setIsDeleteProduct(!isDeleteProduct)
    }

    return (

        <div className={`${styles.products}`}>
            <AddProduct
                getAllProducts={getAllProducts}
            >
            </AddProduct>

            {isShowPromptUpdate &&
                <UpdateProduct
                    getAllProducts={getAllProducts}
                    inforProductUpdate={inforProductUpdate}
                    setIsShowPromptUpdate={setIsShowPromptUpdate}
                    handleIsShowPromptUpdate={handleIsShowPromptUpdate}
                ></UpdateProduct>
            }

            {isShowPromptDelete &&
                <PromptDelete
                    datas={inforProduct}
                    isDeleteProduct={isDeleteProduct}
                    getAllProducts={getAllProducts}
                    handleShowPromptDelete={handleShowPromptDelete}
                ></PromptDelete>}

            {
                allProductsList &&
                <PaginationProducts
                    page={page}
                    setPage={setPage}
                    allProductsList={allProductsList}
                ></PaginationProducts>
            }

            {

                allProductsList &&
                <table className={`${styles.tableProducts}`}>

                    <ProductsHeader></ProductsHeader>
                    {
                        allProductsList.map((product, index) => (
                            <ProductsContent
                                key={index}
                                datas={product}
                                handleIsShowPromptUpdate={handleIsShowPromptUpdate}
                                handleShowPromptDelete={handleShowPromptDelete}

                            ></ProductsContent>
                        ))
                    }

                </table >
            }
        </div >
    );
}

export default Products;