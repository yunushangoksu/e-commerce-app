function CartItem({ data, index }) {
  return (
    <div>
      <div className="cartItemWrapper">
        <div className="cardItemLeft">
          <img src="src/assets/borderlands3.jpg" alt="foto" />
        </div>
        <div className="cartItemRight">
          <div className="cartItemDelete">X</div>
          <div className="cartItemRight2">
            <div className="cartItemName">{data[0].name}</div>
            <div className="cartItemPrice">{data[0].price}</div>
          </div>
        </div>
      </div>
      {console.log(index)}
    </div>
  );
}

export default CartItem;
