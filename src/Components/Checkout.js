import "./checkout.css";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-title">
          <h4>Hello {user != null ? user.email : "Guest"}</h4>
          <strong> Your Shopping Items are Here</strong>
        </div>
        {basket.map((products) => {
         
          return (
            <CheckoutProduct
              id={products.id}
              title={products.title}
              image={products.image}
              price={products.price}
              rating={products.rating}
              desc={products.desc}
            />
          );
        })}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
