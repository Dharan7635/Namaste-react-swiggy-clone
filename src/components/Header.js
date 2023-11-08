import logo from "../../logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [log, setLog] = useState("Login");
  console.log(log);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="login&logout">
        <button
          className="login"
          onClick={() => {
            log === "Login" ? setLog("Logout") : setLog("Login");
          }}
        >
          {log}
        </button>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact US</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
