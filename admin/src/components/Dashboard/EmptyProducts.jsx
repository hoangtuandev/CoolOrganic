import { React } from 'react';
import styles from './Dashboard.module.scss'
import ItemEmptyProduct from './ItemEmptyProduct';

function EmptyProducts(props) {

    const { listEmptyProducts } = props

    return (
        <div className={`${styles.emptyProducts}`}>
            <h3>SẢN PHẨM HẾT HÀNG</h3>

            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Mã sản phẩm</td>
                        <td>Tên sản phẩm</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listEmptyProducts.map((item, index) => (
                            <ItemEmptyProduct
                                item={item}
                                key={index}
                            ></ItemEmptyProduct>
                        ))
                    }

                </tbody>
            </table>


        </div>
    );
}

export default EmptyProducts;