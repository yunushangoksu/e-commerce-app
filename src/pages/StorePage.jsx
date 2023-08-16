import Category from "../components/Category";
import Navbar from "../components/Navbar";
import StorePage from "./StorePage";

function StorePages() {
  return (
    <div className="storePagesWrapper">
      <Navbar />
      <div className="subWrapper">
        <Category />
        <StorePage />
      </div>
    </div>
  );
}

export default StorePages;
