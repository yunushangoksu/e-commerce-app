function Card({ data }) {
  return (
    <div className="cardWrapper">
      <div className="cardImage">
        <img src="" alt="" />
      </div>
      <div className="cardDescriptionLeft">
        <div className="cardPlatforms"></div>
        <div className="cardName"></div>
      </div>
      <div className="cardDescriptionRight">
        <div className="cardPrice"></div>
      </div>
    </div>
  );
}

export default Card;
