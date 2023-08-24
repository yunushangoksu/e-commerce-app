import HomeCategoryNavbar from "../components/HomeNavbar";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import { useState } from "react";
function HomePage() {
  const [cart, setCart] = useState([
    {
      name: "Remnant 2",
      price: "19.98",
    },
    {
      name: "Remnant 2",
      price: "19.98",
    },
  ]);

  return (
    <div className="homeWrapper1">
      <Cart cartData={cart} />
      <Navbar />
      <div className="homeWrapper">
        <HomeCategoryNavbar cartData={cart} cartSetter={setCart} />
      </div>
    </div>
  );
}

export default HomePage;
