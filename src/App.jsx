import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
function App() {
  const cartValue = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(cartValue);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="wrapper">
      <Navbar />
      <HomePage />
      <Cart cart={cart} setCart={setCart} />
      <div
        className="cartOutside"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "-22em";
          document.querySelector(".cartOutside").style.right = "-100vw";
          document.querySelector("body").style.overflowY = "scroll";
        }}
      ></div>
    </div>
  );
}

export default App;
