import { React } from 'react';
import axios from 'axios'
import { ImEye, ImBlocked } from 'react-icons/im'
import { TiLockOpenOutline } from 'react-icons/ti'
import styles from './Acounts.module.scss'
import DetailAccount from './DetailAccount';

function AccountsContent(props) {

    const { data,
        handleGetAllAccountAdmin,
        isShowDetailAccount,
        setIsShowDetailAccount,
        setAccountSelectViewDetail,
        accountSelectViewDetail } = props

    const baseUrl = 'http://localhost:3333'

    const handleDisbleAccount = () => {
        axios.post(baseUrl + '/disableAccountAdmin', { username: data.tkqt_tendangnhap })
            .then((res) => {
                handleGetAllAccountAdmin()
            })
    }

    const handleEnableAccount = () => {
        axios.post(baseUrl + '/enableAccountAdmin', { username: data.tkqt_tendangnhap })
            .then((res) => {
                handleGetAllAccountAdmin()
            })
    }

    const handleOpenPopupDetailAccount = () => {
        setIsShowDetailAccount(true)
        setAccountSelectViewDetail(data)
    }

    return (
        <tr className={`${styles.orderItem}`}>
            <td>{data.tkqt_tendangnhap}</td>
            <td className={`${styles.itemName}`}>{data.nv_hoten}</td>
            <td className={`${styles.itemPosition}`}><span>{data.qhtk_quyenhan}</span></td>
            {
                data.tkqt_trangthai === 'OPEN' &&
                <td className={`${styles.itemStateOpen}`}><span>{data.tttk_trangthai}</span></td>
            }
            {
                data.tkqt_trangthai === 'LOCK' &&
                <td className={`${styles.itemStateLock}`}><span>{data.tttk_trangthai}</span></td>

            }

            <td className={`${styles.catagoryButton}`}>
                <button
                    className={`${styles.buttonDetail}`}
                    onClick={handleOpenPopupDetailAccount}
                >
                    <span className={`${styles.buttonIcon}`}><ImEye /></span>
                    <span className={`${styles.buttonLabel}`}>Chi tiết</span>

                </button>
                {
                    isShowDetailAccount &&
                    <DetailAccount
                        data={data}
                        isShowDetailAccount={isShowDetailAccount}
                        setIsShowDetailAccount={setIsShowDetailAccount}
                        accountSelectViewDetail={accountSelectViewDetail}
                    ></DetailAccount>
                }
                {
                    data.tkqt_trangthai === 'OPEN' &&
                    <button className={`${styles.buttonDisable}`}
                        onClick={handleDisbleAccount}
                    >
                        <span className={`${styles.buttonIcon}`}><ImBlocked /></span>
                        <span className={`${styles.buttonLabel}`}>Vô hiệu </span>
                    </button>
                }
                {
                    data.tkqt_trangthai === 'LOCK' &&
                    <button className={`${styles.buttonEnable}`}
                        onClick={handleEnableAccount}
                    >
                        <span className={`${styles.buttonIcon}`}><TiLockOpenOutline /></span>
                        <span className={`${styles.buttonLabel}`}> Mở khóa </span>
                    </button>
                }

            </td>

        </tr>
    );
}

export default AccountsContent;