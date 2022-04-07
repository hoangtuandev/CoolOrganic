import { React } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styles from './Products.module.scss'

function ProductsContent(props) {
    const { datas, handleShowPromptDelete, handleIsShowPromptUpdate } = props
    const sp_hinhanh = require(`../../images/${datas.sp_hinhanh}`)

    const handleShowFormUpdate = () => {
        handleIsShowPromptUpdate(datas.sp_id, datas.sp_tensanpham, datas.sp_hinhanh, datas.sp_gia, datas.sp_donvitinh, datas.sp_tonkho, datas.sp_maloai)
    }

    return (
        <tbody>
            <tr>
                <td className={`${styles.productImage}`}><img src={sp_hinhanh} alt="" /></td>
                <td>{datas.sp_id}</td>
                <td className={`${styles.productsName}`}>{datas.sp_tensanpham}</td>
                <td className={`${styles.productStyles}`}>{datas.sp_gia}</td>
                <td className={`${styles.productStyles}`}>{datas.sp_donvitinh}</td>
                <td className={`${styles.productStyles}`}>{datas.sp_tonkho}</td>
                <td className={`${styles.productButton}`}>
                    <button
                        className={`${styles.buttonEdit}`}
                        onClick={handleShowFormUpdate}
                    >
                        <span className={`${styles.buttonIcon}`}><AiFillEdit /></span>
                        <span className={`${styles.buttonLabel}`}>Sửa</span>
                    </button>
                    <button
                        className={`${styles.buttonDelete}`}
                        onClick={() => handleShowPromptDelete(datas.sp_hinhanh, datas.sp_id, datas.sp_tensanpham)}
                    >
                        <span className={`${styles.buttonIcon}`}><AiFillDelete /></span>
                        <span className={`${styles.buttonLabel}`}>Xóa</span>
                    </button>
                </td>
            </tr>
        </tbody >
    );
}

export default ProductsContent;