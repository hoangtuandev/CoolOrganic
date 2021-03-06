import { React, useState, useEffect } from 'react';
import axios from 'axios'
import styles from './Products.module.scss'
import { AiOutlinePicture } from "react-icons/ai";

function FormAddProduct(props) {

    const { getAllProducts, handleShowFormAddProduct } = props
    const baseUrl = 'http://localhost:3333'
    const [catagorysList, setCatagorysList] = useState([])
    const [idProduct, setIdProduct] = useState("")
    const [nameProduct, setNameProduct] = useState("")
    const [catagoryProduct, setCatagoryProduct] = useState("")
    const [priceProduct, setPriceProduct] = useState("")
    const [stockProduct, setStockProduct] = useState("")
    const [unitProduct, setUnitProduct] = useState("")
    const [avatarProduct, setAvatarProduct] = useState()
    const [avatarName, setAvatarName] = useState("")

    const getAllCatagorys = () => {
        axios.get(baseUrl + '/catagorys', {})
            .then((response) => {
                setCatagorysList(response.data)
            })
    }

    const handleSetImgProduct = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatarProduct(file)
        // console.log((file.name))
        const avatarName = file.name
        setAvatarName(avatarName)
    }

    const handleSubmitAddProduct = () => {

        axios.post(baseUrl + '/products/addProduct', {
            idProduct, nameProduct, priceProduct, avatarName, unitProduct, stockProduct, catagoryProduct
        })
            .then((res) => {
                getAllProducts()
                handleShowFormAddProduct()
            })
    }

    useEffect(() => {
        // Clearnup
        return () => {
            avatarProduct && URL.revokeObjectURL(avatarProduct.preview)
        }
    }, [avatarProduct])

    useEffect(() => {
        getAllCatagorys()
        const randomid = Math.floor(Math.random() * 899999) + 100000;
        setIdProduct('SP00' + randomid)
    }, [])

    return (
        <form action="">
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>M?? s???n ph???m</td>
                        <td className={`${styles.valueInput}`}>{idProduct}</td>
                    </tr>
                    <tr>
                        <td><label>T??n s???n ph???m</label></td>
                        <td className={`${styles.valueInput}`}>
                            <input
                                type="text"
                                value={nameProduct}
                                onChange={(e) => setNameProduct(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Lo???i s???n ph???m</label></td>
                        <td>
                            <select
                                value={catagoryProduct}
                                onChange={(e) => setCatagoryProduct(e.target.value)}
                            >
                                {
                                    catagorysList.map((catagory, index) => (
                                        <option key={index} value={catagory.lsp_id}>{catagory.lsp_tenloai}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>????n gi??</label></td>
                        <td className={`${styles.valueInput}`}>
                            <input
                                type="text"
                                value={priceProduct}
                                onChange={(e) => setPriceProduct(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label>????n v??? t??nh</label></td>
                        <td className={`${styles.valueInput}`}>
                            <input
                                type="text"
                                value={unitProduct}
                                onChange={(e) => setUnitProduct(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label>T???n kho</label></td>
                        <td className={`${styles.valueInput}`}>
                            <input
                                type="text"
                                value={stockProduct}
                                onChange={(e) => setStockProduct(e.target.value)}
                            />
                        </td>
                    </tr>
                    {/* <tr className={`${styles.errorEmpty}`}>
                        <td></td>
                        <td>Vui l??ng nh???p "T??n danh m???c"</td>
                    </tr> */}

                    <tr className={styles.imageInput}>
                        <td><label>H??nh ???nh s???n ph???m</label></td>
                        <td className={`${styles.valueInput}`}>
                            <input
                                type="file"
                                id="fileImg"
                                onChange={handleSetImgProduct}
                            />
                            <label className={styles.labelImage} htmlFor="fileImg">

                                {
                                    !avatarProduct &&
                                    <span><AiOutlinePicture className={styles.iconPicture} /></span>
                                }
                                {
                                    avatarProduct &&
                                    <span><img src={avatarProduct.preview} alt='' /></span>
                                }

                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button
                                type='button'
                                onClick={handleSubmitAddProduct}
                            >L??U L???I
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default FormAddProduct;