import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from './Checkout.module.scss'

function PayPall(props) {

    const { handlePayment } = props

    return (
        <PayPalScriptProvider className={`${styles.paypall}`} options={{ "client-id": "test" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "0.1",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        handlePayment()
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPall;