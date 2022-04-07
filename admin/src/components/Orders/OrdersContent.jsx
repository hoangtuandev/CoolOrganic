import { React } from 'react';
import axios from 'axios'
import styles from './Orders.module.scss'
import { ImEye, ImBlocked, ImBin } from 'react-icons/im'
import Select from 'react-select'

function OrdersContent(props) {

    const { item, setIsShowDetailOrder, setOrderSelectedView, handleGetAllOrders } = props
    const baseUrl = 'http://localhost:3333'

    const options = [
        { value: 'DANHANDON', label: 'Đã nhận' },
        { value: 'DANGGIAO', label: 'Đang giao' },
        { value: 'THANHCONG', label: 'Thành công' },

    ]

    const handleChangeStateOrder = (option) => {

        axios.post(baseUrl + '/orders/updateStateorder', { id: item.dh_id, state: option.value })
            .then((res) => {
                handleGetAllOrders()
            })
    }

    const handleViewDetailOrder = () => {
        setOrderSelectedView(item.dh_id)
        setIsShowDetailOrder(true)
    }

    const handleCancelOrder = () => {
        axios.post(baseUrl + '/orders/cancelOrder', { id: item.dh_id })
            .then((res) => {
                handleGetAllOrders()
            })
    }

    const handleAcceptOrder = () => {
        axios.post(baseUrl + '/orders/acceptOrder', { id: item.dh_id })
            .then((res) => {
                handleGetAllOrders()
            })
    }

    const handleDeleteOrder = () => {
        axios.post(baseUrl + '/orders/deleteOrder', { id: item.dh_id })
            .then((res) => {
                handleGetAllOrders()
            })
    }


    return (
        <tr className={`${styles.orderItem}`}>

            <td>{item.dh_id}</td>
            <td >{item.tkkh_hoten}</td>
            <td className={`${styles.itemName}`}>
                {Math.floor((item.dh_thanhtoan) / 1000)}.
                {`${(item.dh_thanhtoan) % 1000}00`.slice(0, 3)}
                <sup>đ</sup>
            </td>
            <td>{item.dh_ngaydathang}</td>
            <td className={`${styles.itemState}`}>
                {
                    item.ttdh_id === 'THANHCONG' &&
                    <span className={`${styles.successState}`}>{item.ttdh_trangthai}</span>
                }
                {
                    (item.ttdh_id === 'DANHANDON' || item.ttdh_id === 'DANGGIAO' || item.ttdh_id === 'CHOXACNHAN') &&
                    <span className={`${styles.shippingState}`}>{item.ttdh_trangthai}</span>
                }
                {
                    item.ttdh_id === 'DAHUY' &&
                    <span className={`${styles.receivedState}`}>{item.ttdh_trangthai}</span>
                }
            </td>

            <td className={`${styles.updateState}`}>
                {
                    item.ttdh_id === 'CHOXACNHAN' &&
                    <button
                        type='button'
                        onClick={handleAcceptOrder}
                    >
                        Xác nhận
                    </button>
                }
                {
                    item.ttdh_id !== 'CHOXACNHAN' &&
                    <Select
                        placeholder={item.ttdh_trangthai}
                        options={options}
                        onChange={handleChangeStateOrder}
                    />

                }
            </td>
            <td className={`${styles.catagoryButton}`}>
                <button type='button'
                    className={`${styles.buttonEdit}`}
                    onClick={handleViewDetailOrder}
                >
                    <span className={`${styles.buttonIcon}`}><ImEye /></span>

                </button>
                {
                    item.dh_trangthai === 'DAHUY' || item.dh_trangthai === 'THANHCONG'
                        ? <button
                            type='button' className={`${styles.buttonDelete}`}
                            onClick={handleDeleteOrder}
                        >
                            <span className={`${styles.buttonIcon}`}> <ImBin /> </span>
                        </button>

                        : <button
                            type='button' className={`${styles.buttonDelete}`}
                            onClick={handleCancelOrder}
                        >
                            <span className={`${styles.buttonIcon}`}><ImBlocked /></span>
                        </button>
                }

            </td>
        </tr >
    );
}

export default OrdersContent;