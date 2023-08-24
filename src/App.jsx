import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <HomePage />
      <Cart />
      <div
        className="cartOutside"
        onClick={() => {
          document.querySelector(".cartWrapper").style.marginRight = "-22em";
          document.querySelector(".cartOutside").style.right = "-100vw";
          document.querySelector("body").style.overflowY = "scroll";
        }}
      ></div>
    </div>
  );
}

export default App;
