import HomeCategoryNavbar from "../components/HomeNavbar";

function HomePage() {
  return (
    <>
      <div className="homeWrapper">
        <HomeCategoryNavbar />
      </div>
      <div className="footer">
        <div className="footerText">
          Made by
          <a className="yunushan" href="https://github.com/yunushangoksu">
            Yunushan Göksu
          </a>
        </div>
        <div className="footerText">
          Powered by
          <a className="rawg" href="https://rawg.io/">
            RAWG
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
