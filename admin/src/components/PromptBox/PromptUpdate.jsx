import { React, useState } from 'react';
import axios from 'axios'
import styles from './PromptUpdate.module.scss'

function PromptUpdate(props) {

    const baseUrl = 'http://localhost:3333'
    const { itemId, itemName, handleShowPromptUpdate, getAllCatagorys } = props
    const [isShowError, setIsShowError] = useState(false)
    const [itemNameNew, setItemNameNew] = useState(itemName)

    const handleSubmitUpdateCatagory = () => {
        if (itemNameNew === '') {
            setIsShowError(true)
        }
        else {
            axios.post(baseUrl + '/catagorys/update', {
                id: itemId,
                name: itemNameNew
            })
                .then((res) => {
                    getAllCatagorys()
                    handleShowPromptUpdate()
                })
        }
    }

    return (
        <div className={`${styles.promptUpdateBox}`}>
            <div className={`${styles.backgroundBlock}`}></div>
            <div className={`${styles.promptUpdate}`}>
                <p>Cập nhật danh mục sản phẩm</p>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Mã danh mục</td>
                            <td className={`${styles.valueInput}`}>{itemId}</td>
                        </tr>
                        <tr>
                            <td><label>Tên danh mục</label></td>
                            <td className={`${styles.valueInput}`}>
                                <input
                                    type="text"
                                    value={itemNameNew}
                                    onChange={(event) => setItemNameNew(event.target.value)}
                                />
                            </td>
                        </tr>
                        {isShowError &&
                            <tr className={`${styles.errorEmpty}`}>
                                <td></td>
                                <td>Vui lòng nhập "Tên danh mục"</td>
                            </tr>}
                    </tbody>
                </table>

                <div className={`${styles.buttonsUpdate}`}>
                    <button
                        className={`${styles.updateButton}`}
                        onClick={handleSubmitUpdateCatagory}
                    >
                        LƯU
                    </button>
                    <button
                        className={`${styles.cancelButton}`}
                        onClick={handleShowPromptUpdate}
                    >
                        HỦY
                    </button>
                </div>
            </div >
        </div >
    );
}

export default PromptUpdate;