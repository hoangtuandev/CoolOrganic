import { React } from 'react';
import styles from './Orders.module.scss'
import ProductOrder from './ProductOrder';

function DetailOrder(props) {

    const { setIsShowDetailOrder, detailOrder, listProductsOrder } = props

    const handleCloseDetailOrder = () => {
        setIsShowDetailOrder(false)
    }

    return (
        <div className={`${styles.detailOrder}`}>
            <div className={`${styles.main}`}>
                <div className={`${styles.left}`}>
                    <h3>THÔNG TIN ĐƠN HÀNG</h3>
                    {
                        detailOrder &&
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Khách hàng:</td>
                                    <td className={`${styles.content}`}>{detailOrder.tkkh_hoten}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Liên hệ:</td>
                                    <td className={`${styles.content}`}>{detailOrder.dh_sodienthoai}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Địa chỉ nhận hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {detailOrder.dh_diachi}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {
                        detailOrder &&
                        <table className={`${styles.tableOrderDetail}`}>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.title}`}>Mã đơn hàng:</td>
                                    <td className={`${styles.content}`}> {detailOrder.dh_id}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Tài khoản đặt hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {detailOrder.dh_taikhoan}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Ngày đặt hàng:</td>
                                    <td className={`${styles.content}`}> {detailOrder.dh_ngaydathang}</td>
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Hình thức thanh toán:</td>
                                    {
                                        detailOrder.dh_hinhthucthanhtoan === 'offline' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán khi nhận hàng
                                        </td>
                                    }
                                    {
                                        detailOrder.dh_hinhthucthanhtoan === 'online' &&
                                        <td className={`${styles.content}`}>
                                            Thanh toán trực tuyến
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className={`${styles.title}`}>Trạng thái đơn hàng:</td>
                                    <td className={`${styles.content}`}>
                                        {detailOrder.ttdh_trangthai}
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
                    listProductsOrder &&
                    <div className={`${styles.right}`}>
                        <ul>
                            {
                                listProductsOrder.map((item, index) => (
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