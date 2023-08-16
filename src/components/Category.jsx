function Category() {
  return (
    <div className="categoryWrapper">
      <div className="categoryBlock">
        <div className="categoryHeader">New Releases</div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-star-48.png"
            alt=""
            className="categorySvg"
          />
          Last 30 days
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-gas-48.png"
            alt=""
            className="categorySvg"
          />
          This week
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-fast-forward-48.png"
            alt=""
            className="categorySvg"
          />
          Next Week
        </div>
      </div>
      <div className="categoryBlock">
        <div className="categoryHeader">Top</div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-trophy-48.png"
            alt=""
            className="categorySvg"
          />
          Best of the year
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-statistics-48.png"
            alt=""
            className="categorySvg"
          />
          Popular in 2022
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-crown-48.png"
            alt=""
            className="categorySvg"
          />
          All time top
        </div>
      </div>
      <div className="categoryBlock">
        <div className="categoryHeader">Platforms</div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-windows.svg"
            alt=""
            className="categorySvg"
          />
          PC
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-playstation-32.png"
            alt=""
            className="categorySvg"
          />
          PlayStation
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-xbox.svg"
            alt=""
            className="categorySvg"
          />
          Xbox
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-nintendo-switch-logo.svg"
            alt=""
            className="categorySvg"
          />
          Nintendo Switch
        </div>
        <div className="categoryRow">
          <img src="src/assets/icons8-ios.svg" alt="" className="categorySvg" />
          IOS
        </div>
        <div className="categoryRow">
          <img
            src="src/assets/icons8-android.svg"
            alt=""
            className="categorySvg"
          />
          Android
        </div>
      </div>
    </div>
  );
}

export default Category;
