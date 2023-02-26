import React, { useContext, useState } from "react";
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import { v4 as uuidv4 } from "uuid";
import { totalAmmount } from "../utils/totalAmmount";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    "client-id": "ASBjlq16lUJQsFwyXeULVA19wPGZ97QKpjUGk986fVT62zQHzmGJWBDcRavKdZ-C77_KLDaC10Syh5oa"
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    const newOrder = {
      buyer,
      product: cart,
      payment: data
    };
    addNewOrder(newOrder);
    navigate('/checkout/success');
  };

  const handleSumTotal = () => {
    return totalAmmount(cart);
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={uuidv4()}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={paypalOptions}>
            <PayPalButtons
              style={buttonStyles}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: handleSumTotal(),
                      }
                    }
                  ]
                });
              }}
              onInit={() => console.log('Start Payment')}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  console.log(`Transaction completed by ${name}`);
                  handlePaymentSuccess(data);
                });
              }}
              onError={(err) => console.log(err)}
              onCancel={(data) => console.log(data)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Payment;