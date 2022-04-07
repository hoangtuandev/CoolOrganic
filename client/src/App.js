import { React, useEffect, useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Login from './components/UserForm/Login';
import Register from './components/UserForm/Register';
import Fruit from './components/Products/Fruit';
import Vegetables from './components/Products/Vegetables';
import Meat from './components/Products/Meat';
import Drys from './components/Products/Drys';
import Juice from './components/Products/Juices';
import DetailsProduct from './components/DetailsProduct/DetailsProduct';
import Search from './components/Searching/Search';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

function App() {

    const [isLogin, setIsLogin] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    // const [cookiesOrder, setCookieOrder, removeCookieOrder] = useCookies(['order'])
    const [searchProducts, setSearchProducts] = useState([])
    // const [productSelected, setProductSelected] = useState({})
    const [inforProductsOrder, setInforProductsOrder] = useState([])

    const handleSetCookies = (cookie) => {
        setCookie('fullname', cookie.tkkh_hoten, { path: '/' })
        setCookie('phone', cookie.tkkh_sodienthoai, { path: '/' })
        setCookie('password', cookie.tkkh_matkhau, { path: '/' })

        window.location.href = "/"
    }

    // const handleSetCookiesIdProduct = (idProduct) => {
    //     setCookie('idProduct', idProduct, { path: '/' })
    // }

    // const handleRemoveCookiesIdProduct = () => {
    //     removeCookie('idProduct')
    // }

    const handleLogOut = () => {
        removeCookie('fullname')
        removeCookie('phone')
        removeCookie('password')
        window.location.href = "/login"
    }

    const handleGetSearchProduct = (products) => {
        setSearchProducts(products)
    }

    // const handleGetProductSelected = (product) => {
    //     setProductSelected(product)
    // }

    const handleSetInforProductsOrder = (data) => {
        setInforProductsOrder([data])
    }

    const handleSetInforProductsOrderByCart = (data) => {
        setInforProductsOrder(data)
    }

    useEffect(() => {
        cookies.phone && setIsLogin(true)

    }, [])

    return (
        <div className="app">
            <Header
                isLogin={isLogin}
                cookies={cookies}
                handleLogOut={handleLogOut}
                handleGetSearchProduct={handleGetSearchProduct}
                handleSetInforProductsOrderByCart={handleSetInforProductsOrderByCart}
            >
            </Header>
            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/fruits" element={<Fruit />}></Route>
                <Route path="/vegetables" element={<Vegetables />}></Route>
                <Route path="/meats" element={<Meat />}></Route>
                <Route path="/drys" element={<Drys />}></Route>
                <Route path="/juices" element={<Juice />}></Route>
                <Route path="/checkout" element={<Checkout cookies={cookies} inforProductsOrder={inforProductsOrder} />}></Route>
                {/* <Route path="/shipping" element={<><Shipping /><Footer /></>}></Route>
                <Route path="/payment" element={<Payment />}></Route>
                <Route path="/confirm" element={<Confirm />}></Route> */}
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login handleSetCookies={handleSetCookies}> </Login>}> </Route>
                <Route path="/search" element={<Search searchProducts={searchProducts} />}></Route>
                <Route path="/products/details" element={<DetailsProduct cookies={cookies} handleSetInforProductsOrder={handleSetInforProductsOrder} />}></Route>
                <Route path="/orders" element={<Orders cookies={cookies} />}></Route>
            </Routes>

            <Footer Footer ></Footer >
        </div >
    );
}

export default App;
