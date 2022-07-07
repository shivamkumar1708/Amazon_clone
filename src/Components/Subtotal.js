import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

import { useNavigate } from "react-router-dom";

import { getBasketTotal } from "./reducer";

function Subtotal() {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {basket.length} item ):
              <strong>{value}</strong>
            </p>

            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$ "}
      />
      <button
        onClick={(e) => history("/payment")}
        className="proceedto-checkout"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
