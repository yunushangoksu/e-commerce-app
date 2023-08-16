import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="homeNavbarWrapper">
      <Link to="store" className="homeNavbarRow">
        Store
      </Link>
      <div className="homeNavbarRow">Last 30 days</div>
      <div className="homeNavbarRow">Popular in 2022</div>
      <div className="homeNavbarRow">Best of the year</div>
      <div className="homeNavbarRow">All time top</div>
    </div>
  );
}

export default HomeNavbar;
