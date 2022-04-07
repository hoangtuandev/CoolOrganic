import React from 'react';
import styles from './Catagory.module.scss'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function CatagoryContent(props) {
    const { datas, handleShowPromptDelete, handleShowPromptUpdate } = props;
    return (
        <tbody>
            <tr>
                <td className={`${styles.lsp_id}`}>{datas.lsp_id}</td>
                <td className={`${styles.lsp_tenloai}`}>{datas.lsp_tenloai}</td>

                <td className={`${styles.catagoryButton}`}>
                    <button
                        className={`${styles.buttonEdit}`}
                        onClick={() => handleShowPromptUpdate(datas.lsp_id, datas.lsp_tenloai)}
                    >
                        <span className={`${styles.buttonIcon}`}><AiFillEdit /></span>
                        <span className={`${styles.buttonLabel}`}>Sửa</span>
                    </button>
                    <button
                        className={`${styles.buttonDelete}`}
                        onClick={() => handleShowPromptDelete(datas.lsp_id, datas.lsp_tenloai)}
                    >
                        <span className={`${styles.buttonIcon}`}><AiFillDelete /></span>
                        <span className={`${styles.buttonLabel}`}>Xóa</span>
                    </button>
                </td>
            </tr>
        </tbody >
    );
}

export default CatagoryContent;