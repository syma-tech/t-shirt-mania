import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h2>Amar jonno o ekta neo</h2>
        <p>tomar jonno ekta</p>
        <p>
          <small>amar jonno aro ekta</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }

  return (
    <div className={`${cart.length === 0 ? "cyan" : "pink"} `}>
      <h2 className={cart.length === 2 ? "yellow" : "chocolate"}>
        Order summary
      </h2>
      <h4>Order Quantity: {cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>Tin jon k gift diba?</p> : <p>kino kino</p>}
      {cart.length === 2 && <h4>Double Item</h4>}
      {cart.length === 4 || <h2>charta item na</h2>}
    </div>
  );
};

export default Cart;
