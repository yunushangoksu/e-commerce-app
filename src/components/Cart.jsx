function Cart() {
  return (
    <div className="cartWrapper">
      <div className="cartTopRow">
        <div>3 Games</div>
        <div>Clear</div>
      </div>
      <div className="cartItemWrapper">
        <div className="cardItemLeft">
          <img src="src/assets/borderlands3.jpg" alt="foto" />
        </div>
        <div className="cartItemRight">
          <div className="cartItemDelete">X</div>
          <div className="cartItemRight2">
            <div className="cartItemName">Remnant 2</div>
            <div>19.98</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
