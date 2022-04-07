import { React, useState, useEffect } from 'react';
import Axios from 'axios'
import styles from './Catagory.module.scss'
import CatagoryContent from './CatagoryContent';
import CatagoryHeader from './CatagoryHeader';
import AddCatagory from './AddCatagory'
import PromptDelete from '../PromptBox/PromptDelete';
import PromptUpdate from '../PromptBox/PromptUpdate';

function Catagory(props) {

    const [catagorysList, setCatagorysList] = useState([]);
    const [isShowPromptDelete, setIsShowPromptDelete] = useState(false)
    const [isShowPromptUpdate, setIsShowPromptUpdate] = useState(false)
    const [isDeleteCatagory, setIsDeleteCatagory] = useState(false)
    const [itemId, setItemId] = useState("")
    const [itemName, setItemName] = useState("")

    const baseUrl = 'http://localhost:3333'

    useEffect(() => {
        getAllCatagorys();
    }, []);

    const getAllCatagorys = () => {
        Axios.get(baseUrl + '/catagorys', {})
            .then((response) => {
                setCatagorysList(response.data)
            })
    }

    const handleShowPromptDelete = (id, name) => {
        setIsShowPromptDelete(!isShowPromptDelete)
        setItemId(id)
        setItemName(name)
        setIsDeleteCatagory(!isDeleteCatagory)
    }

    const handleShowPromptUpdate = (id, name) => {
        setIsShowPromptUpdate(!isShowPromptUpdate)
        setItemId(id)
        setItemName(name)
    }

    return (
        <div className={`${styles.catagory}`}>
            {isShowPromptUpdate
                && <PromptUpdate
                    itemId={itemId}
                    itemName={itemName}
                    getAllCatagorys={getAllCatagorys}
                    handleShowPromptUpdate={handleShowPromptUpdate}
                >
                </PromptUpdate>

            }

            {isShowPromptDelete
                && <PromptDelete
                    itemId={itemId}
                    itemName={itemName}
                    getAllCatagorys={getAllCatagorys}
                    isDeleteCatagory={isDeleteCatagory}
                    handleShowPromptDelete={handleShowPromptDelete}
                >
                </PromptDelete>
            }

            <AddCatagory
                getAllCatagorys={getAllCatagorys}
            ></AddCatagory>

            <table className={`${styles.tableCatagory}`}>
                <CatagoryHeader></CatagoryHeader>

                {catagorysList.map((catagory, index) => (
                    <CatagoryContent
                        key={index}
                        datas={catagory}
                        handleShowPromptDelete={handleShowPromptDelete}
                        handleShowPromptUpdate={handleShowPromptUpdate}
                    >
                    </CatagoryContent>
                ))}
            </table >
        </div >
    );
}

export default Catagory;