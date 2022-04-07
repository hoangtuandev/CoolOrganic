import { React } from 'react';
import styles from './Acounts.module.scss'

function DetailAccount(props) {

    const { setIsShowDetailAccount } = props
    const data = props.accountSelectViewDetail

    const handleClosePopupDetailAccount = () => {
        setIsShowDetailAccount(false)
    }

    return (
        <div className={`${styles.detailAccount}`}>
            <div className={`${styles.main}`}>
                <h3>TÀI KHOẢN</h3>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={`${styles.label}`}>Tên đăng nhập</td>
                            <td className={`${styles.value}`}>{data.tkqt_tendangnhap}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Quyền hạn tài khoản</td>
                            <td className={`${styles.value}`}>{data.qhtk_quyenhan}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Trạng thái hoạt động</td>
                            <td className={`${styles.value}`}>{data.tttk_trangthai}</td>
                        </tr>

                    </tbody>
                </table>
                <h3>NHÂN VIÊN</h3>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={`${styles.label}`}>Mã nhân viên</td>
                            <td className={`${styles.value}`}>{data.nv_id}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Họ tên</td>
                            <td className={`${styles.value}`}>{data.nv_hoten}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Giới tính</td>
                            <td className={`${styles.value}`}>{data.nv_gioitinh}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Ngày sinh</td>
                            <td className={`${styles.value}`}>{data.nv_ngaysinh}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Số điện thoại</td>
                            <td className={`${styles.value}`}>{data.nv_sodienthoai}</td>
                        </tr>
                        <tr>
                            <td className={`${styles.label}`}>Địa chỉ</td>
                            <td className={`${styles.value}`}>{data.nv_diachi}</td>
                        </tr>

                    </tbody>
                </table>

                <button
                    type='button'
                    onClick={handleClosePopupDetailAccount}
                >CLOSE</button>

            </div>
        </div>
    );
}

export default DetailAccount;