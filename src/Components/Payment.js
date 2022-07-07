import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from "./CheckoutProduct";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "./axios";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./Firebase";

function Payment() {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${
          basket
            ? basket.reduce((total, { price }) => total + price, 0) * 100
            : 0
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  //
  //console.log("cs is=>", clientSecret);
  const stringClientSecret = clientSecret.toString();
  const stripe = useStripe();
  const elements = useElements();
  //
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((paymentIntent) => {
        //console.log(paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.paymentIntent.amount,
            created: paymentIntent.paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history("/orders", { replace: true });
      })

      .catch((error) => console.log("this is error", error));
  };
  //
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket ? basket.length : 0} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user ? user.email : "not a user"}</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery </h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-detail">
            <form className="formc" onSubmit={handleSubmit}>
              <div className="cardelement">
                <div>
                  <CardElement onChange={handleChange} />
                </div>
              </div>
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={
                    basket
                      ? basket.reduce((total, { price }) => total + price, 0)
                      : 0
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
