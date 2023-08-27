import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    document.querySelector(".searchResults").style.display = "flex";
    setSearchTerm(e.target.value);
  };

  const fetchData = async () => {
    let slug = searchTerm.split(" ").join("-").toLocaleLowerCase();
    setResults([]);
    await fetch(
      `https://api.rawg.io/api/games?key=758f797c3db7418e8ce75ca4625d31f6&search=${slug}&page_size=5`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          [];
        }
      })
      .then((data) => {
        setResults(data.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".searchResults").style.display = "flex";
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

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
          className="searchBarInput"
          onBlur={() => {
            setTimeout(
              () =>
                (document.querySelector(".searchResults").style.display =
                  "none"),
              100
            );
          }}
          onFocus={handleChange}
        />

        <div className="searchResults">
          {results.map((data, index) => (
            <Link
              to={`/game/${data.name}`}
              state={{ results: data }}
              key={index}
              className="searchResultsSubWrapper"
            >
              <div className="searchResultsItemWrapperItemLeft">
                <img src={data.background_image} alt={data.name} />
              </div>
              <div className="searchResultsItemRight">
                <div className="searchResultsItemRight2">
                  <div className="searchResultsItemName">{data.name}</div>
                  <div>19.98$</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*         <div className="searchResults">
          <div className="searchResultsItemRight">
            <div className="searchResultsItemRight2">
              <div className="searchResultsItemName">{"Nothing found :("}</div>
            </div>
          </div>
        </div> */}
      </form>
      <div
        className="navbarCart"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "0";
          document.querySelector(".cartOutside").style.right = "0";
          document.querySelector("body").style.overflowY = "hidden";
        }}
      >
        <img src="icons8-cart-30.png" alt="Cart" />
      </div>
    </div>
  );
}

export default Navbar;
