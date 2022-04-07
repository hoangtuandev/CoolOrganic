//import axios, * as others from 'axios';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import styles from './Catagory.module.scss'

function AddFrom(props) {

    const { getAllCatagorys, handleShowFromAdd } = props;
    const [idCatagory, setIdCatagory] = useState("")
    const [nameCatagory, setNameCatagory] = useState("")
    const [errorEmpty, setErrorEmpty] = useState(false)
    const baseUrl = 'http://localhost:3333'

    useEffect(() => {
        const randomid = Math.floor(Math.random() * 899) + 100;
        setIdCatagory('LSP0' + randomid)
    }, [])

    const handleSubmitAddCatagory = () => {
        setErrorEmpty(nameCatagory === '' ? true : false)

        if (nameCatagory !== '') {
            axios.post(baseUrl + "/catagorys/addCatagory", {
                id: idCatagory,
                name: nameCatagory

            })
                .then((response) => {
                    setErrorEmpty(false)
                    handleShowFromAdd()
                    getAllCatagorys();
                })
        }
    }

    return (
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Mã danh mục</td>
                    <td className={`${styles.valueInput}`}>{idCatagory}</td>
                </tr>
                <tr>
                    <td><label>Tên danh mục</label></td>
                    <td className={`${styles.valueInput}`}><input
                        type="text"
                        onChange={(event) => setNameCatagory(event.target.value)}
                    /></td>
                </tr>
                {errorEmpty &&
                    <tr className={`${styles.errorEmpty}`}>
                        <td></td>
                        <td>Vui lòng nhập "Tên danh mục"</td>
                    </tr>}
                <tr>
                    <td></td>
                    <td><button
                        onClick={handleSubmitAddCatagory}
                    >LƯU LẠI</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default AddFrom;