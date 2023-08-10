import React from "react";

function Category() {
  return (
    <div className="categoryWrapper">
      <div className="categoryBlock">
        <div className="categoryHeader">New Releases</div>
        <div className="categoryRow">Last 30 days</div>
        <div className="categoryRow">This week</div>
        <div className="categoryRow">Next Week</div>
      </div>
      <div className="categoryBlock">
        <div className="categoryHeader">Top</div>
        <div className="categoryRow">Best of the year</div>
        <div className="categoryRow">popular in 2022</div>
        <div className="categoryRow">All time top</div>
      </div>
      <div className="categoryBlock">
        <div className="categoryHeader">Platforms</div>
        <div className="categoryRow">PC</div>
        <div className="categoryRow">PlayStation</div>
        <div className="categoryRow">Xbox</div>
        <div className="categoryRow">Nintendo Switch</div>
        <div className="categoryRow">IOS</div>
        <div className="categoryRow">Android</div>
      </div>
    </div>
  );
}

export default Category;
