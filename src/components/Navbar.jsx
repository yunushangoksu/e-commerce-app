import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLocaleLowerCase();
    setResults([]);
    await fetch(
      `https://api.rawg.io/api/games/${slug}?key=758f797c3db7418e8ce75ca4625d31f6`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("not found");
        }
      })
      .then((data) => {
        setResults(data);
        document.querySelector(".searchResults").style.display = "flex";
      });
    setSearchTerm("");
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
          /*           onBlur={() =>
            (document.querySelector(".searchResults").style.display = "none")
          } */
          className="searchBarInput"
        />
        {results ? (
          <Link
            to={`/game/${results.name}`}
            state={{ results: results }}
            className="searchResults"
          >
            <div className="searchResultsItemWrapperdItemLeft">
              <img src={results.background_image} alt={results.name} />
            </div>
            <div className="searchResultsItemRight">
              <div className="searchResultsItemRight2">
                <div className="searchResultsItemName">{results.name}</div>
                <div>19.98$</div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="searchResults">
            <div className="searchResultsItemRight">
              <div className="searchResultsItemRight2">
                <div className="searchResultsItemName">
                  {"Nothing found :("}
                </div>
              </div>
            </div>
          </div>
        )}
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
