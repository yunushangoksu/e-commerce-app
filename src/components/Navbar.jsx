import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLocaleLowerCase();

    setResults([]);
    fetch(
      `https://api.rawg.io/api/games/${slug}?key=758f797c3db7418e8ce75ca4625d31f6`
    )
      .then((resp) => resp.json())
      .then(({ results }) => {
        results === undefined ? alert("not found") : setResults(results);
      });
    setSearchTerm("");
    console.log(results);
  };

  return (
    <div className="navbarWrapper">
      <Link className="navbarLogo" to="/">
        SHOP
      </Link>

      <form onSubmit={handleSubmit} className="navbarSearchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

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
