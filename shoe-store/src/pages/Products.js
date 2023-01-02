import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../stores/slices/products";
export default function Products() {
  const {product} =useSelector(state => state.products)
  const dispatch=useDispatch();
  return (
    <div>
      <div className="home-products-container">
        <div className="home-products">
          <img
            src="https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg"
            style={{
              width: "200px",
              height: "150px",
            }}
          ></img>
          <h3 className="home-shoe-name" s>
            Flex Experience Run 9
          </h3>
          <h3 className="home-shoe-price">$65</h3>
          <HiShoppingCart size={35} />
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
          <HiShoppingCart size={35} />
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
          <HiShoppingCart size={35}/>
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
          <HiShoppingCart size={35}/>
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
          <HiShoppingCart size={35}/>
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
          <HiShoppingCart size={35}/>
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
          <HiShoppingCart size={35}/>
        </div>
      </div>
    </div>
  );
}
