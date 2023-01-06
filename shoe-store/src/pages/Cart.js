import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, removeBasket, clearCart } from "../stores/slices/basket";

export default function Cart() {
  const dispatch = useDispatch();
  const { basket } = useSelector((item) => item.basket);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  let basketLength = basket.length;
  let sumBasket = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let sumQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <div className="cart-container">

        <div className="cart-header">
          <div style={{paddingLeft:"2rem"}}>
            <h2>Shopping Cart</h2>
          </div>
          <div>
            {sumBasket?(<button onClick={() => handleClearCart()}>Remove All</button>):("")}
          </div>
        </div>      {sumBasket?"":(<h3 style={{textAlign:"center"}}>Empty Cart...</h3>)}
        {basket.map((item) => (
          <div className="cart" key={item.id}>
            <div className="cart-image">
              <img
                src={item.src}
                style={{
                  width: "200px",
                  height: "150px",
                }}
              ></img>
            </div>
            <div className="cart-text">{item.title}</div>
            <div className="cart-quantity">
              <button onClick={() => dispatch(removeBasket(item))}> - </button>
              {item.quantity}
              <button onClick={() => dispatch(addBasket(item))}> + </button>
            </div>
            <div className="cart-price">${item.quantity * item.price}</div>
          </div>
        ))}  {sumBasket?(
        <div className="cart-footer">
          <div className="cart-footer-total">Sub Total</div>
          <div className="cart-footer-total">{sumBasket ? ": $" + sumBasket : ""}</div>
        </div>):("")}
      </div>
    </div>
    /*<div style={{ textAlign: "center", display: "flex" }}>
      <div className="home-products-container" style={{ width: "60%" }}>
        {basket.map((item) => (
          <div className="home-products" key={item.id}>
            <img
              src={item.src}
              style={{
                width: "200px",
                height: "150px",
              }}
            ></img>
            <h3 className="home-shoe-name">{item.title}</h3>
            <h3 className="home-shoe-price">${item.price}</h3>
            <button onClick={() => dispatch(removeBasket(item))}> - </button>
            {item.quantity}
            <button onClick={() => dispatch(addBasket(item))}> + </button>
            <br />
            <label>Sum Total: ${item.quantity * item.price}</label>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "35%",
          float: "left",
          padding: "1rem",
          fontSize: "22px",
        }}
      >
        
        <br />
        <br />
        {sumBasket ? "Total Price:" + sumBasket : ""}
        <br />
        <br />
        {sumQuantity ? "Total Product:" + sumQuantity : ""}
        <br />
        <br />
        {basketLength ? "Different Product Count:" + basketLength : ""}
        <br />
      </div>
    </div>*/
  );
}
