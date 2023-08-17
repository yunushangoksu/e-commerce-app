import { useState, useEffect } from "react";

function Cart(data) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cartWrapper">
      <div className="cartTopRow">
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
    </div>
  );
}

export default Cart;
