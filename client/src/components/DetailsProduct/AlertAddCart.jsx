import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import styles from './DetailsProduct.module.scss'

function AlertAddCart(props) {

    const { setIsShowAlertAddCart } = props

    return (
        <div className={`${styles.alertAddCart}`}>
            <Stack
                sx={{ width: '100%' }} spacing={2}>
                <Alert
                    severity="success"
                    onClose={() => { setIsShowAlertAddCart(false) }}
                >
                    <AlertTitle><strong>Success</strong></AlertTitle>
                    Thêm sản phẩm vào giỏ hàng thành công

                </Alert>
            </Stack>
        </div>
    );
}

export default AlertAddCart;