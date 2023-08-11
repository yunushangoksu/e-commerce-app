function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navbarLogo">SHOP</div>
      <div className="navbarSearchBar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbarCart">
        <img src="src/assets/icons8-cart-30.png" alt="Cart" />
      </div>
    </div>
  );
}

export default Navbar;
