import { useState, useEffect } from "react";
import Card from "./Card";

function GameList({ cart, setCart }) {
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.rawg.io/api/games?key=758f797c3db7418e8ce75ca4625d31f6&dates=2019-09-01,2022-09-30&platforms=18,1,7"
    );
    const data = await res.json();
    setGames(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="shopWrapper">
      <div className="shopHeader">Best of the year</div>
      <div className="shopSection">
        {games.map((data, index) => (
          <Card games={data} key={index} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default GameList;
