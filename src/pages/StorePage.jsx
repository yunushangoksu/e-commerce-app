import Category from "../components/Category";
import Navbar from "../components/Navbar";
import GameList from "../components/GameList";
import Cart from "../components/Cart";

function StorePages({ cartData, cartSetter }) {
  return (
    <div>
      <Cart cartData={cartData} cartSetter={cartSetter} />

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
