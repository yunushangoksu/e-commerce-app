import "./App.css";
import StorePage from "./pages/StorePage";
import Navbar from "./components/Navbar";
import Category from "./components/Category";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="subWrapper">
        <Category />
        <StorePage />
      </div>
    </div>
  );
}

export default App;
