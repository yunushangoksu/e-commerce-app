import Category from "../components/Category";
import Navbar from "../components/Navbar";
import GameList from "../components/GameList";
import Cart from "../components/Cart";
import { useState, useEffect } from "react";
function StorePages() {
  const cartValue = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(cartValue);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Cart cart={cart} setCart={setCart} />

      <div
        className="cartOutside"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "-22em";
          document.querySelector(".cartOutside").style.right = "-100vw";
          document.querySelector("body").style.overflowY = "scroll";
        }}
      ></div>

      <div className="storePagesWrapper">
        <Navbar />
        <div className="subWrapper">
          <Category />
          <GameList cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default StorePages;
