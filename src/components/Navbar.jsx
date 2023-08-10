function Navbar() {
  return (
    <div className="navbarWrapper">
      <div className="navbarLogo">SHOP</div>
      <div className="navbarSearchBar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbarCart">🛒</div>
    </div>
  );
}

export default Navbar;
