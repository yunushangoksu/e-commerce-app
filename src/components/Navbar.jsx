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

      <div
        className="navbarCart"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "0";
          document.querySelector(".cartOutside").style.right = "0";
          document.querySelector("body").style.overflowY = "hidden";
        }}
      >
        <img src="src/assets/icons8-cart-30.png" alt="Cart" />
      </div>
    </div>
  );
}

export default Navbar;
