import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              {" "}
              <a href="/">Home </a>
            </li>
            <li>
              {" "}
              <a href="/">About </a>
            </li>
            <li>
              {" "}
              <a href="/">Contact </a>
            </li>
            <li>
              {" "}
              <a href="/">Cart </a>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button onClick={() => setisLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setisLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};

export default Header;
