import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./Components/Firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
import Registration from "./Components/Registration";

//https://challenge-29227.web.app/

const promise = loadStripe(
  "pk_test_51L6qFESF05bjA82HUgDPAquwAnwLWv7eX3bPZ3Ch1aHsPEP64eoMtlrDBnkMWlcuUARllZ3zDciApQRhdN74BPH600N0zwOaMG"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is=>>", authUser);
      if (authUser) {
        //the user just loggedin /the was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header /> <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route
            exact
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>

          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
