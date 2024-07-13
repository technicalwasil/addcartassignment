import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="left">My Shopping</div>

        <div className="right">
          <ul>
            <li>Log in</li>
            <li>Sign up</li>
            <li>
              <img src="./images/cart.png" alt="cart" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
