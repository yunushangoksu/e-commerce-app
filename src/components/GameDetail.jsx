import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GameDetail() {
  const location = useLocation();
  const data = location.state.results;

  const [game, setGame] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenshots, setScreenshots] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games/${data.slug}?key=758f797c3db7418e8ce75ca4625d31f6`
    );
    const response = await res.json();
    setGame(response);
  };

  const fetchScreenshot = async () => {
    const screenShotRes = await fetch(
      `https://api.rawg.io/api/games/${data.slug}/screenshots?key=758f797c3db7418e8ce75ca4625d31f6`
    );
    const screenShotResponse = await screenShotRes.json();
    setScreenshots(screenShotResponse.results);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData();
    fetchScreenshot();
  }, []);

  return (
    <>
      <a href="javascript: history.back()" className="gameDetailBackLink">
        Back
      </a>
      <div className="gameDetailWrapper">
        {isLoaded ? (
          <div className="gameDetailSubWrapper">
            <div className="box">
              <Carousel
                showIndicators={true}
                showThumbs={false}
                showStatus={false}
                useKeyboardArrows={true}
                width={1000}
              >
                {screenshots.map((URL, index) => (
                  <div className="slide" key={index}>
                    <img alt="sample_file" src={URL.image} key={index} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="gameDetailInfoWrapper">
              <a className="gameDetailName" href={game.website}>
                {game.name}
              </a>
              <div className="gameDetailDescription">
                {game.description_raw}
              </div>

              <div className="gameDetailRatingSection">
                <div className="gameDetailRating">{game.rating}</div>
                <div className="gameDetailMetacritic">{game.metacritic}</div>
              </div>
            </div>
            <div className="gameDetailLoadingFadeOut">loadingggggggg</div>
          </div>
        ) : (
          <div className="gameDetailLoading">
            <div className="gameDetailRoller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GameDetail;
