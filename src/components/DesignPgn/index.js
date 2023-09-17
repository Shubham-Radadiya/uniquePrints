import React from "react";
import "./index.css";

export default function DesignPgn() {
  return (
    <>
      <div className="img_flex_designPgn">
        <div>
          <img className="img_1_designPgn" src="/image/30e072ee-5466-4199-85b0-4a600161d5f0.png" alt="" />
          <img className="img_2_designPgn" src="/image/Group 119.png" alt="" />
        </div>
        <div className="img">
          <p className="three_bg">
            <h1 className="three_heading">Packaging Design</h1>
            <h2 className="three_sub_heading">50 cards from $19.99</h2>
            <span className="text">Cut through the networking  clutter and say hello with printify business Cards.</span>
          </p>

          <p className="four_bg">
            <h1 className="three_heading">Packaging Design</h1>
            <h2 className="three_sub_heading">50 cards from <span style={{ color: 'rgb(255, 67, 40)' }}>$19.99</span> </h2>
            <span className="text_four">Cut through the networking  clutter and say hello with  printify business Cards.</span>
          </p>
        </div>

      </div>
      <img className="error" src="/image/Group 213.png" alt="" />
      <img className="error-1" src="/image/Group 213.png" alt="" />
    </>
  );
}
