import { useState } from "react";
import "./App.css";
import StorePage from "./pages/StorePage";

function App() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.rawg.io/api/games?key=758f797c3db7418e8ce75ca4625d31f6&dates=2019-09-01,2019-09-30&platforms=18,1,7"
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="wrapper">
      <StorePage />
      <button onClick={() => fetchData()}>Fetch</button>
    </div>
  );
}

export default App;
