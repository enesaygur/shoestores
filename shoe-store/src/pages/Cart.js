import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { basket } = useSelector((item) => item.basket);
  console.log(basket);
  return (
    <div style={{ textAlign: "center" }}>
      <label>Sepet Ürün Sayısı: {basket.length}</label><br/>
      <div className="home-products-container">
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
            <label>
              {item.quantity} x {item.price} = ${item.quantity*item.price}
            </label>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
