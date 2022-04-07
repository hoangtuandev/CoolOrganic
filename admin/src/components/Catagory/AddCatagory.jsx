import { React, useState } from 'react';
import AddFrom from './AddFrom';
import styles from './Catagory.module.scss'

function AddCatagory(props) {

    const { getAllCatagorys } = props
    const [isShowFrom, setIsShowFrom] = useState(false);

    const handleShowFromAdd = () => {
        setIsShowFrom(!isShowFrom)
    }

    return (
        <div className={`${styles.addCatagory}`}>
            <button
                className={`${styles.buttonAdd}`}
                onClick={handleShowFromAdd}
            >
                THÊM DANH MỤC
            </button>

            <div className={`${styles.addFromCatagory}`}>
                {isShowFrom
                    && <AddFrom
                        handleShowFromAdd={handleShowFromAdd}
                        getAllCatagorys={getAllCatagorys}
                    >
                    </AddFrom>}

            </div>
        </div >
    );
}

export default AddCatagory;