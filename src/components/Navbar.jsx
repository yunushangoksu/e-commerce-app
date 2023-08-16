import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <Link className="navbarLogo" to="/">
        SHOP
      </Link>
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
