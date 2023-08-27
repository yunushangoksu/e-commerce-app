import { Link } from "react-router-dom";
/* import { useState } from "react"; */

function Card({ games, cart, setCart }) {
  /*   const [isAdded, setIsAdded] = useState(false); */

  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <Link to={`/game/${games.name}`} state={{ results: games }}>
          <img
            src={games.background_image}
            alt={games.name}
            className="cardImageImg"
          />
        </Link>

        {/*         {isAdded ? (
          <div className="cardAddButtonAdded">
            <img
              src="src/assets/icons8-cart-30.png"
              alt="Cart"
              className="cardAddButtonImg"
            />
          </div>
        ) : (
          <div
            className="cardAddButton"
            onClick={() => {
              setCart([...cart, games]);
              setIsAdded(true);
            }}
          >
            <img
              src="src/assets/icons8-cart-30.png"
              alt="Cart"
              className="cardAddButtonImg"
            />
          </div>
        )} */}
        <div
          className="cardAddButton"
          onClick={() => {
            setCart([...cart, games]);
            /*             setIsAdded(true); */
          }}
        >
          <img
            src="icons8-cart-30.png"
            alt="Cart"
            className="cardAddButtonImg"
          />
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
