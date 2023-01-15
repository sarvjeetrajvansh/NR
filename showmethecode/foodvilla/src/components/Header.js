import { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/">Cart </Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button className="auth-btn" onClick={() => setisLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="auth-btn" onClick={() => setisLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
