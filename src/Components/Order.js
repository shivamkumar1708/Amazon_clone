import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          desc={item.desc}
          hidebutton={true}
        />
      ))}
      <div className="order-total">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h3>Order Total: {value}</h3>
            </>
          )}
          decimalScale={2}
          value={order.data.amount ? order.data.amount / 100 : 0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </div>
    </div>
  );
}

export default Order;
