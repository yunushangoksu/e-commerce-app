import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="homeNavbarWrapper">
      <Link to="store" className="homeNavbarRow">
        Store
      </Link>
    </div>
  );
}

export default HomeNavbar;
