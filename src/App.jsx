import React, { useState } from "react";
import "./components/cart.css";
import Navbar from "./components/Navbar";

function App() {
  var [cartVal, cartCount] = useState(0);
  const resetCart = () => {
    cartCount(0);
  };

  const [showDiv1, setShowDiv1] = useState(true);

  const toggleDiv = () => {
    setShowDiv1(!showDiv1);
  };
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [clicked, setClicked] = useState(false);

  const changeBackgroundColor = () => {
    if (!clicked) {
      setBackgroundColor("darkslateblue");
      setClicked(true);
    } else {
      setBackgroundColor("white");
      setClicked(false);
    }
  };

  return (
    <>
      <Navbar />
      {showDiv1 ? (
        <div className="cartMenu">
          <img src="./images/laptop.jpeg" alt="laptop" className="laptop" />
          <p>
            HP ZHAN 66 PRO G4 | AMD RYZEN 7 5800U (1.90 GHz) | 08GB Ram | 512GB
            SSD | 14.0’’ FHD | SILVER | DOS | (Open Box) <br /> Price.Rs 160,000
          </p>
          <hr />
          <h2>{cartVal}</h2>
          <button onClick={() => cartCount(cartVal + 1)}>Add to cart</button>
          <button onClick={() => cartCount(cartVal - 1)}>Remove to cart</button>
          <button onClick={resetCart}>Empty cart</button>
        </div>
      ) : (
        <div
          style={{ backgroundColor: backgroundColor, padding: 20 }}
          className="buyThings"
        >
          <img src="./images/laptop2.jpeg" alt="laptop2" className="laptop2" />
          <p>
            HP OMEN 15-EK0026NW | 10TH GEN | CORE I5-10300H (2.5GHz) | 8GB RAM |
            512GB SSD | 6GB Nvidia GTX 1660Ti | 15.6″ FHD 144Hz | Black | DOS |
            <br />
            Price.Rs 220,000
          </p>
          <hr />
          <button onClick={changeBackgroundColor} className="clrbtn">
            Change Color
          </button>
        </div>
      )}
      <button onClick={toggleDiv} className="buyBtn">
        Buy Things
      </button>
    </>
  );
}

export default App;
