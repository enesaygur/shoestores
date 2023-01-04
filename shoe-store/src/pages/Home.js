import React from "react";
import product from "../products.json";
export default function Home() {
  product.sort((a, b) => (a.id > b.id ? -1 : +1));
  return (
    <div>
      <div className="home-banner"></div>
      <div className="home-tagline">JUST DO IT</div>
      <div className="home-content">
        Nike has been your companion in happiness, both big and small, for over
        50 years. Our roots are firmly grounded in Pakistan and with its people.
      </div>
      <div className="home-end">
        <div className="home-lines">
          <hr className="line" />
          <span className="home-span"> Latest Designs</span>
          <hr className="line" />
        </div>
      </div>
      <div className="home-products-container">
        {product.slice(0, 4).map((item) => (
          <div className="home-products" key={item.id}>
            <img
              src={item.src}
              style={{
                width: "200px",
                height: "150px",
              }}
            ></img>
            <h3 className="home-shoe-name">Flex Experience Run 9</h3>
            <h3 className="home-shoe-price">${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
