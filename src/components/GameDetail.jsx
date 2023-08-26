import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function GameDetail() {
  const location = useLocation();
  const data = location.state.results;

  const [game, setGame] = useState({});

  const fetchData = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games/${data.slug}?key=758f797c3db7418e8ce75ca4625d31f6`
    );
    const response = await res.json();
    setGame(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <a href="javascript: history.back()" className="gameDetailBackLink">Back</a>
      <div className="gameDetailWrapper">
        <div className="gameDetailSubWrapper">
          <img
            src={data.background_image}
            alt="background_image"
            className="gameDetailImage"
          />
          <div className="gameDetailInfoWrapper">
            <a className="gameDetailName" href={game.website}>
              {data.name}
            </a>
            <div className="gameDetailDescription">{game.description_raw}</div>

            <div className="gameDetailRatingSection">
              <div className="gameDetailRating">{data.rating}</div>
              <div className="gameDetailMetacritic">{data.metacritic}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetail;
