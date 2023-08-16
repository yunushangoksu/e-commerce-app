import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
