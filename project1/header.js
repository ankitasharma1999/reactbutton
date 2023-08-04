import React from "react";
import './header.css'; 
import icon1 from "./icon.png"
import search from "./search.png"

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
                <img src={require("./logo1.png")} alt="logo1" height="130 px"/>
          <div className="header-menu">
                <ul className="main-menu">
                  <li className="product1">Products<span className="pic"><img src={icon1} alt="i1"/></span></li>
                  <li lassName="product1">For Teams<span className="pic"><img src={icon1} alt="i1"/></span></li>
                  <li lassName="product1">Support<span className="pic"><img src={icon1} alt="i1"/></span></li>
                </ul>
          </div>
        </div>
        <div>
            <button>Try Free</button>
            <button>Buy Now<span className="search"><img src={search} alt="i1"/></span></button>
            <button>Login</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
