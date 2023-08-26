import { Link } from "react-router-dom";

function Card({ games, cart, setCart }) {
  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <Link to={`/game/${games.name}`} state={{ results: games }}>
          <img src={games.background_image} alt={games.name} />
        </Link>

        <div
          className="cardAddButton"
          onClick={() => {
            setCart([...cart, games]);
          }}
        >
          🛒
        </div>
      </div>
      <div className="cardDescriptionWrapper">
        <div className="cardDescriptionTop">
          <div className="cardPlatforms">Steam</div>
          <div className="cardPrice">44.98$</div>
        </div>
        <div className="cardDescriptionBottom">
          <div className="cardName">{games.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
