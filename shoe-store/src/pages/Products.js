import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import product from "../products.json";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../stores/slices/basket";
//import { setProducts } from "../stores/slices/products"; eğer veri apiden gelseydi kullanılacaktı
export default function Products() {
  // const { products } = useSelector((state) => state.products); apiden gelseydi kullanılacaktı
  const dispatch = useDispatch();
  product.sort((a, b) => (a.id > b.id ? -1 : +1)); //liste id sine göre sıra tersine çevrildi.
  return (
    <div>
      <div className="home-products-container">
        {product.map((item) => (
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
            <HiShoppingCart size={35} onClick={()=>dispatch(addBasket(item))}/>
          </div>
        ))}
      </div>
    </div>
  );
}
