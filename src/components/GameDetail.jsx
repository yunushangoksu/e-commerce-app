import { useLocation } from "react-router-dom";
function GameDetail(props) {
  const location = useLocation();
  const data = location.state.results;
  console.log(location, " useLocation Hook");

  return (
    <div>
      <img src={data.background_image} width={300} alt="background_image" />
      <div>{data.name}</div>
      <div>{data.description_raw}</div>
      <div>{data.rating}</div>
      <div>{data.metacritic}</div>
      <div>{data.website}</div>
    </div>
  );
}

export default GameDetail;
