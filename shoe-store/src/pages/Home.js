import React from "react";

export default function Home() {
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
        <div className="home-products">
          <img
            src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"
            style={{
              width: "200px",
              height: "150px",
            }}
          ></img>
          <h3 className="home-shoe-name"s>Flex Experience Run 9</h3>
          <h3 className="home-shoe-price">$65</h3>
        </div>
        <div className="home-products">
          <img
            src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"
            style={{
              width: "200px",
              height: "150px",
            }}
          ></img>
          <h3 className="home-shoe-name">Flex Experience Run 9</h3>
          <h3 className="home-shoe-price">$65</h3>
        </div>
        <div className="home-products">
          <img
            src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"
            style={{
              width: "200px",
              height: "150px",
            }}
          ></img>
          <h3 className="home-shoe-name">Flex Experience Run 9</h3>
          <h3 className="home-shoe-price">$65</h3>
        </div>
        <div className="home-products">
          <img alt=""
            src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"
            style={{
              width: "200px",
              height: "150px",
            }}
          ></img>
          <h3 className="home-shoe-name">Flex Experience Run 9</h3>
          <h3 className="home-shoe-price">$65</h3>
        </div>
      </div>
    </div>
  );
}
