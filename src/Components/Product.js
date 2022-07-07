import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, image, price, rating, desc }) {
  const [{ user }, dispatch] = useStateValue();
  const history = useNavigate();

  const addToBasket = () => {
    if (user !== null) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: +price,
          rating: rating,
          desc: desc,
        },
      });
    } else {
      history("./login", { replace: true });
    }
  };
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-heading">{title}</p>
        <p>
          <p>{desc}</p>
        </p>
        {/* <p className="product-price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p> */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <strong>{value}</strong>
            </>
          )}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <div className="product-rating">
          {Array(+rating)
            .fill()
            .map((_, i) => (
              <p className="stars">
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
}

export default Product;
