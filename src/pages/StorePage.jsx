import Category from "../components/Category";
import Navbar from "../components/Navbar";
import GameList from "../components/GameList";

function StorePages() {
  return (
    <div className="storePagesWrapper">
      <Navbar />
      <div className="subWrapper">
        <Category />
        <GameList />
      </div>
    </div>
  );
}

export default StorePages;
