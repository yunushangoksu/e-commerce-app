import Category from "../components/Category";
import Navbar from "../components/Navbar";
import GameList from "../components/GameList";
import Cart from "../components/Cart";

function StorePages() {
  return (
    <div>
      <Cart />
      <div
        className="cartOutside"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "-22em";
          document.querySelector(".cartOutside").style.right = "-100vw";
        }}
      ></div>

      <div className="storePagesWrapper">
        <Navbar />
        <div className="subWrapper">
          <Category />
          <GameList />
        </div>
      </div>
    </div>
  );
}

export default StorePages;
