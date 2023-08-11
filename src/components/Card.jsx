function Card({ games }) {
  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <img src="src/assets/borderlands3.jpg" alt="Borderlands 3" />
        <div className="cardAddButton">🛒</div>
      </div>
      <div className="cardDescriptionWrapper">
        <div className="cardDescriptionLeft">
          <div className="cardPlatforms">Steam</div>
          <div className="cardName">Borderlands 3</div>
        </div>
        <div className="cardDescriptionRight">
          <div className="cardPrice">44.98$</div>
        </div>
      </div>

      {/* <div className="cardImage">
        <img src={games.background_image} alt={games.name} />
        <div className="cardAddButton">🛒</div>
      </div>
      <div className="cardDescriptionWrapper">
        <div className="cardDescriptionLeft">
          <div className="cardPlatforms">Steam</div>
          <div className="cardName">{games.name}</div>
        </div>
        <div className="cardDescriptionRight">
          <div className="cardPrice">44.98$</div>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
