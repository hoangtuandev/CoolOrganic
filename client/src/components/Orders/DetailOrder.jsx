import { React } from 'react';
import styles from './Orders.module.scss'
import ProductOrder from './ProductOrder';
// import ProductOrder from './ProductOrder';

function DetailOrder(props) {

    //const baseUrl = 'http://localhost:3333'

    const { setIsShowDetailOrder } = props
    const data = props.inforDetailOrder
    const listProducts = props.listProductDetailOrder

    const handleCloseDetailOrder = () => {
        setIsShowDetailOrder(false)
    }


    return (
        <div className={`${styles.detailOrder}`}>
            <div className={`${styles.main}`}>
                <div className={`${styles.left}`}>
                    <h3>THÔNG TIN ĐƠN HÀNG</h3>
                    {
                        data &&
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Khách hàng:</td>
                                    <td className={`${styles.content}`}>{data.tkkh_hoten}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Liên hệ:</td>
                                    <td className={`${styles.content}`}>{data.dh_sodienthoai}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Địa chỉ nhận hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {data.dh_diachi}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {
                        data &&
                        <table className={`${styles.tableOrderDetail}`}>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Mã đơn hàng:</td>
                                    <td className={`${styles.content}`}>{data.dh_id}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Ngày đặt hàng:</td>
                                    <td className={`${styles.content}`}> {data.dh_ngaydathang}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Hình thức thanh toán:</td>
                                    {
                                        data.dh_hinhthucthanhtoan === 'offline' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán khi nhận hàng
                                        </td>
                                    }
                                    {
                                        data.dh_hinhthucthanhtoan === 'online' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán trực tuyến
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Trạng thái đơn hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {data.ttdh_trangthai}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }

                    <button
                        type='button' className={`${styles.btnClose}`}
                        onClick={handleCloseDetailOrder}
                    >
                        CLOSE
                    </button>
                </div>
                {
                    listProducts &&
                    <div className={`${styles.right}`}>
                        <ul>
                            {
                                listProducts.map((item, index) => (
                                    <ProductOrder
                                        key={index}
                                        item={item}
                                    ></ProductOrder>
                                ))
                            }

                        </ul>
                    </div>
                }

            </div>
        </div>
    );
}

export default DetailOrder;