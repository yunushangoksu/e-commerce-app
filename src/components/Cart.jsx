<<<<<<< Updated upstream
import { useState, useEffect } from "react";

function Cart(data) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
=======
import CartItem from "./CartItem";
>>>>>>> Stashed changes

function Cart({ cartData, cartSetter }) {
  return (
    <div className="cartWrapper">
      <div
        className="cartOutside"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "-22em";
          document.querySelector(".cartOutside").style.right = "-100vw";
        }}
      ></div>
      <div className="cartTopRow">
<<<<<<< Updated upstream
        <div>{data.length} Games</div>
        <div>Clear</div>
      </div>

      <div className="cartItemWrapper">
        <div className="cardItemLeft">
          <img src="src/assets/borderlands3.jpg" alt="foto" />
        </div>
        <div className="cartItemRight">
          <div className="cartItemDelete">X</div>
          <div className="cartItemRight2">
            <div className="cartItemName">{data.name}</div>
            <div>19.98</div>
          </div>
        </div>
      </div>
      <button onClick={() => setCart([...cart, "Deneme"])}>Hebe</button>
=======
        <div>{cartData.length} Games</div>
        <div>Clear</div>
      </div>
      {cartData.map((data, index) => (
        <CartItem data={cartData} key={index} order={index} />
      ))}
>>>>>>> Stashed changes
    </div>
  );
}

export default Cart;
