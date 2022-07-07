import React from "react";
import "./checkoutproduct.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  desc,
  hidebutton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkout-img" src={image} />
      <div className="checkout-info">
        <p className="checkout-title">{title}</p>

        <p className="checkout-desc">{desc}</p>
        <p className="checkout-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-rating">
          {Array(+rating)
            .fill()
            .map(() => {
              return (
                <span className="stars">
                  <StarRateIcon />
                </span>
              );
            })}
        </div>
        {!hidebutton && (
          <button className="checkout-button" onClick={removeFromBasket}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
