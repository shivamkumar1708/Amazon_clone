import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1"

          //src="https://www.citypng.com/public/uploads/preview/-11596409153ixy8eolhxq.png"
        />
      </Link>
      "
      <div className="header-search">
        <input className="input-searchIn" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "./login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLine1">
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>

            <span className="header-optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"./orders"}>
          <div className="header-option">
            <span className="header-optionLine1">Return</span>
            <span className="header-optionLine2"> & Orders</span>
          </div>
        </Link>
        <Link to="">
          <div className="header-option">
            <span className="header-optionLine1">Your</span>
            <span className="header-optionLine2">Prime</span>
          </div>
        </Link>
        <Link to="./checkout">
          <div className="header-basket">
            <ShoppingCartIcon />
            <span className=" basket-count">
              {basket ? basket.length : "0"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
