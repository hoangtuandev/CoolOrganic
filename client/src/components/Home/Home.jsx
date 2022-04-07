import { React } from 'react';
import Banner from './Banner';
import Discount from './Discount';
import FruitHome from './ProductLists';
import VagetableHome from './ProductLists';
import BeatHome from './ProductLists';
import DryHome from './ProductLists';
import Juices from './ProductLists';
import styles from './Home.module.scss'
import NewsHome from './NewsHome';

function Home(props) {

    const { handleGetProductSelected } = props

    return (
        <div className={`${styles.home}`}>
            <div></div>
            <div>
                <Banner></Banner>
                <Discount handleGetProductSelected={handleGetProductSelected}></Discount>
                <FruitHome
                    catagory={'LSP0407'}
                    title={'TRÁI CÂY TƯƠI'}
                    handleGetProductSelected={handleGetProductSelected}
                ></FruitHome>
                <VagetableHome
                    catagory={'LSP0002'}
                    title={'RAU CỦ SẠCH'}
                    handleGetProductSelected={handleGetProductSelected}
                ></VagetableHome>
                <BeatHome
                    catagory={'LSP0151'}
                    title={'THỊT TƯƠI SỐNG'}
                    handleGetProductSelected={handleGetProductSelected}
                ></BeatHome>
                <DryHome
                    catagory={'LSP0568'}
                    title={'THỰC PHẨM KHÔ'}
                    handleGetProductSelected={handleGetProductSelected}
                ></DryHome>
                <Juices
                    catagory={'LSP0437'}
                    title={'NƯỚC ÉP TƯƠI'}
                    handleGetProductSelected={handleGetProductSelected}
                ></Juices>
                <NewsHome></NewsHome>
            </div>
            <div></div>
        </div >
    );
}

export default Home;