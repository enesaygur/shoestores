import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, removeBasket } from "../stores/slices/basket";

export default function Cart() {
  const dispatch = useDispatch();
  const { basket } = useSelector((item) => item.basket);
  let basketLength = basket.length;
  let sumBasket = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let sumQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div style={{ textAlign: "center", display: "flex" }}>
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
            <label>${item.quantity * item.price}</label>
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
        {sumBasket ? "Toplam Fiyat:" + sumBasket : ""}
        <br />
        <br />
        {sumQuantity ? "Toplam Ürün:" + sumQuantity : ""}
        <br />
        <br />
        {basketLength?"Farklı Ürün Adedi:"+ basketLength:""}
        <br />
      </div>

    </div>
  );
}
