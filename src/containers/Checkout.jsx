import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import CheckoutItem from "../components/CheckoutItem";
import { totalAmmount } from "../utils/totalAmmount";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    return totalAmmount(cart);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidos:' : 'Sin pedidos...'}</h3>
        {cart.map(item => (
          <CheckoutItem key={uuidv4()} item={item} handleRemove={handleRemove} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${handleSumTotal()}</h3>
          <Link to='/checkout/information'>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;