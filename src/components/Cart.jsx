function Cart({ cart, setCart }) {
  let currentCart = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className="cartWrapper">
      <div className="cartTopRow">
        <div>{currentCart ? currentCart.length : ""} Games</div>
        <div onClick={() => setCart([])}>Clear</div>
      </div>

      {cart
        ? cart.map((game, index) => (
            <div className="cartItemWrapper" key={index}>
              <div className="cardItemLeft">
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className="cartItemRight">
                <div className="cartItemDelete">X</div>
                <div className="cartItemRight2">
                  <div className="cartItemName">{game.name}</div>
                  <div>19.98</div>
                </div>
              </div>
            </div>
          ))
        : []}
    </div>
  );
}

export default Cart;
