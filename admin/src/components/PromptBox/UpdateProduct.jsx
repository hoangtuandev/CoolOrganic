import { React, useState, useEffect } from 'react';
import axios from 'axios'
import styles from './UpdateProduct.module.scss'
import { AiOutlinePicture } from "react-icons/ai";

function PromptUpdate(props) {

    const { handleIsShowPromptUpdate, getAllProducts, setIsShowPromptUpdate } = props
    const datas = props.inforProductUpdate
    const baseUrl = 'http://localhost:3333'
    const initAvatar = require(`../../images/${datas.avatar}`)
    const idProduct = datas.id
    const [nameProduct, setNameProduct] = useState(datas.name)
    const [catagorysList, setCatagorysList] = useState([])
    const [catagoryProduct, setCatagoryProduct] = useState(datas.catagory)
    const [priceProduct, setPriceProduct] = useState(datas.price)
    const [stockProduct, setStockProduct] = useState(datas.stock)
    const [unitProduct, setUnitProduct] = useState(datas.unit)
    const [avatarProduct, setAvatarProduct] = useState(initAvatar)
    const [avatarName, setAvatarName] = useState(datas.avatar)

    useEffect(() => {
        getAllCatagorys()
    }, [])

    const handleSetImgProduct = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatarProduct(file.preview)
        setAvatarName(file.name)
    }

    const handleSubmitUpdateProduct = () => {
        axios.post(baseUrl + '/product/updateProduct', {
            id: idProduct,
            name: nameProduct,
            price: priceProduct,
            avatar: avatarName,
            unit: unitProduct,
            stock: stockProduct,
            catagory: catagoryProduct
        })
            .then((res) => {
                getAllProducts()
                setIsShowPromptUpdate(false)
            })
    }

    const getAllCatagorys = () => {
        axios.get(baseUrl + '/catagorys', {})
            .then((response) => {
                setCatagorysList(response.data)
            })
    }

    useEffect(() => {
        // Clearnup
        return () => {
            avatarProduct && URL.revokeObjectURL(avatarProduct.preview)
        }
    }, [avatarProduct])

    return (
        <div className={`${styles.updateProduct}`}>
            <div className={`${styles.backgroundBlock}`}></div>
            <div className={`${styles.promptUpdate}`}>
                <p>C???p nh???t danh m???c s???n ph???m</p>
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
                                            datas.catagory === catagory.sp_loaisanpham
                                                ? <option key={index} selected value={catagory.lsp_id}>{catagory.lsp_tenloai}</option>
                                                : <option key={index} value={catagory.lsp_id}>{catagory.lsp_tenloai}</option>
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
                                        <span><img src={avatarProduct} alt='' /></span>
                                    }

                                </label>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className={`${styles.buttonsUpdate}`}>
                    <button
                        className={`${styles.updateButton}`}
                        onClick={handleSubmitUpdateProduct}
                    >
                        L??U
                    </button>
                    <button
                        className={`${styles.cancelButton}`}
                        onClick={handleIsShowPromptUpdate}
                    >
                        H???Y
                    </button>
                </div>
            </div >
        </div >
    );
}

export default PromptUpdate;