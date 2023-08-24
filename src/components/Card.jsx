function Card({ games, cart, setCart, useForceUpdate }) {
  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <img src={games.background_image} alt={games.name} />
        <div
          className="cardAddButton"
          onClick={() => {
            setCart([...cart, games]);
            console.log(cart);
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
