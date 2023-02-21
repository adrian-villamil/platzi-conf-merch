import React from "react";

const CheckoutItem = ({ item, handleRemove }) => {
  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
      <button type="button" onClick={() => handleRemove(item)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default CheckoutItem