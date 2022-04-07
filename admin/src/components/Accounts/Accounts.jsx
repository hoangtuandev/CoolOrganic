import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AccountsContent from './AccountsContent';
import AccountsHeader from './AccountsHeader';
import styles from './Acounts.module.scss'


function Accounts(props) {

    const baseUrl = 'http://localhost:3333'
    const [allAccountAdmin, setAllAccountAdmin] = useState([])
    const [isShowDetailAccount, setIsShowDetailAccount] = useState(false)
    const [accountSelectViewDetail, setAccountSelectViewDetail] = useState({})


    const handleGetAllAccountAdmin = () => {
        axios.get(baseUrl + '/allAccountAdmin', {})
            .then((res) => {

                setAllAccountAdmin(res.data)
            })
    }

    useEffect(() => {
        handleGetAllAccountAdmin()
    }, [])

    return (
        <div className={`${styles.accounts}`}>
            <table className={`${styles.tableAccounts}`}>
                <AccountsHeader></AccountsHeader>
                <tbody>
                    {
                        allAccountAdmin.map((item, index) => (
                            <AccountsContent
                                key={index}
                                data={item}
                                handleGetAllAccountAdmin={handleGetAllAccountAdmin}
                                isShowDetailAccount={isShowDetailAccount}
                                setIsShowDetailAccount={setIsShowDetailAccount}
                                accountSelectViewDetail={accountSelectViewDetail}
                                setAccountSelectViewDetail={setAccountSelectViewDetail}
                            ></AccountsContent>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Accounts;