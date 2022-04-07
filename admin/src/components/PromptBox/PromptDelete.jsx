import { React } from 'react';
import axios from 'axios';
import styles from './PromptDelete.module.scss'

function PromptDelete(props) {

    const { itemId, itemName, handleShowPromptDelete, getAllCatagorys, getAllProducts, datas, isDeleteProduct, isDeleteCatagory } = props
    const baseUrl = 'http://localhost:3333'
    let avatarProduct = null
    if (isDeleteProduct) { avatarProduct = require(`../../images/${datas.avatar}`) }

    const handleDeleteItem = () => {
        isDeleteCatagory && axios.post(baseUrl + "/catagorys/deleteCatagory", { id: itemId })
            .then((response) => {
                handleShowPromptDelete();
                getAllCatagorys();
            })

        isDeleteProduct && axios.post(baseUrl + "/products/deleteProduct", { id: datas.id })
            .then((res) => {
                handleShowPromptDelete()
                getAllProducts()
            })
    }

    return (
        <div className={`${styles.promptBox}`}>
            <div className={`${styles.backgroundBlock}`}>

            </div>
            <div className={`${styles.promptDelete}`}>
                <p>Xác nhận muốn xóa bỏ ?</p>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            {isDeleteProduct &&
                                <td><img src={avatarProduct} width="120" height="100" alt="" /></td>
                            }
                            <td><span>
                                {isDeleteCatagory && itemId}
                                {isDeleteProduct && datas.id}
                            </span></td>
                            <td>-</td>
                            <td><span>
                                {isDeleteCatagory && itemName}
                                {isDeleteProduct && datas.name}
                            </span></td>
                        </tr>
                    </tbody>
                </table>
                <div className={`${styles.buttonsDelete}`}>
                    <button
                        className={`${styles.deleteButton}`}
                        onClick={handleDeleteItem}
                    >XÓA</button>
                    <button
                        className={`${styles.cancelButton}`}
                        onClick={handleShowPromptDelete}
                    >
                        HỦY</button>
                </div>
            </div >
        </div >
    );
}

export default PromptDelete;