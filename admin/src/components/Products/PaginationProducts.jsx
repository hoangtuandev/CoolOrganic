import { React, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './Products.module.scss'
import axios from 'axios';

function PaginationProducts(props) {

    const { page, setPage } = props
    const [totalPage, setTotalPage] = useState()
    const baseUrl = 'http://localhost:3333'

    axios.get(baseUrl + '/products', {})
        .then((res) => {
            setTotalPage(Math.ceil(res.data.length / 10))
        })

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className={`${styles.paginationProducts}`}>
            <Stack
                spacing={2}
                className={`${styles.main}`}>
                <Pagination
                    count={totalPage} page={page} color="primary"
                    onChange={handleChange} />
            </Stack>
        </div>
    );
}

export default PaginationProducts;