import { useState, useEffect } from "react";
import Card from "./Card";
import Category from "./Category";

function GameList({ cart, setCart }) {
  const [games, setGames] = useState([]);
  const [header, setHeader] = useState("Best of the year");
  const [fetchApi, setFetchApi] = useState(
    "https://api.rawg.io/api/games?key=758f797c3db7418e8ce75ca4625d31f6&dates=2019-09-01,2022-09-30&platforms=18,1,7"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    setIsLoaded(false);
    const res = await fetch(fetchApi);
    const data = await res.json();
    setGames(data.results);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, [fetchApi]);

  return (
    <>
      <Category fetchApiSetter={setFetchApi} headerSetter={setHeader} />
      <div className="shopWrapper">
        <div className="shopHeader">{header}</div>
        {isLoaded ? (
          <div className="shopSection">
            {games.map((data, index) => (
              <Card games={data} key={index} cart={cart} setCart={setCart} />
            ))}
          </div>
        ) : (
          <div className="shopLoadingCircle">
            <div></div>
          </div>
        )}
      </div>
    </>
  );
}

export default GameList;
