import { React } from 'react';
import styles from './Checkout.module.scss'
import BackgroundDiscount from '../../images/background_discount_1.png'

function ItemDiscount(props) {

    const { data, setCodeDiscount, setIsShowListDiscount, setCostDiscount, totalOrder } = props


    const handleSelectDiscountOrder = () => {
        setCodeDiscount(data.khmai_id)
        setIsShowListDiscount(false)

        if (data.kmai_giatri < 1) {
            if ((totalOrder * data.kmai_giatri) >= data.kmai_giamtoida) {
                setCostDiscount(data.kmai_giamtoida)
            }
            else {
                setCostDiscount(totalOrder * data.kmai_giatri)
            }
        }
        else {
            setCostDiscount(data.kmai_giatri)
        }
    }

    return (
        <li>
            <img src={BackgroundDiscount} alt="" />
            <div className={`${styles.logo}`}>
                {data.khmai_nhan}<span>OFF</span>
            </div>
            <div className={`${styles.detail}`}>
                <div>{data.kmai_mota}</div>
                <div>Giảm tối đa {data.kmai_giamtoida}</div>
                <div>{data.kmai_ngayketthuc}</div>
                {
                    totalOrder >= data.kmai_dieukien
                        ? <div
                            className={`${styles.select}`}
                            onClick={handleSelectDiscountOrder}
                        >
                            Chọn
                        </div>
                        : <div
                            className={`${styles.unSelect}`}
                        >
                            Chưa đủ
                        </div>
                }

            </div>
        </li>
    );
}

export default ItemDiscount;