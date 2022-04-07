import './App.css';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Menu from './components/Menu/Menu'
import Products from './components/Products/Products'
import Catagory from './components/Catagory/Catagory';
import Orders from './components/Orders/Orders'
import Accounts from './components/Accounts/Accounts';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const handleSetCookieLogin = (cookie) => {
        setCookie('username', cookie.tkqt_tendangnhap, { path: '/' })
        setCookie('password', cookie.tkqt_matkhau, { path: '/' })
        setCookie('access', cookie.tkqt_quyenhan, { path: '/' })

        window.location.href = "/"
    }

    const handleLogout = () => {
        removeCookie('username')
        removeCookie('password')
        removeCookie('access')
        window.location.href = "/login"
    }

    useEffect(() => {
        // if (!cookies.username) {
        //     window.location.href = "/login"
        // }
    }, [])

    return (
        <div className='app'>

            <Routes>
                <Route path="/" element={
                    <>
                        <Sidebar cookies={cookies} > </Sidebar>
                        <Menu handleLogout={handleLogout} ></Menu>
                        <Dashboard />
                    </>} />
                <Route path="/products" element={
                    <>
                        <Sidebar cookies={cookies} > </Sidebar>
                        <Menu handleLogout={handleLogout} ></Menu>
                        <Products />
                    </>} />
                <Route path="/catagorys" element={
                    <>
                        <Sidebar cookies={cookies} > </Sidebar>
                        <Menu handleLogout={handleLogout} ></Menu>
                        <Catagory />
                    </>} />
                <Route path="/orders" element={
                    <>
                        <Sidebar cookies={cookies} > </Sidebar>
                        <Menu handleLogout={handleLogout} ></Menu>
                        <Orders />
                    </>
                } />
                <Route path="/accounts" element={
                    <>
                        <Sidebar cookies={cookies} > </Sidebar>
                        <Menu handleLogout={handleLogout} ></Menu>
                        <Accounts />
                    </>
                } />
                <Route path="/login" element={
                    <>
                        <Login
                            handleSetCookieLogin={handleSetCookieLogin}
                        >
                        </Login>
                    </>
                } />
            </Routes>
        </div>
    );
}

export default App;
