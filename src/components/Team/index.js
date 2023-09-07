import React from "react";
import "./index.css";

export default function Team() {
  return (
    <>
      <div className="team_bg">
        <div>
          <h2 className="small_team_heading">meet our team</h2>
          <h1 className="team_heading">Team Members</h1>
        </div>
        <div className="card_flex">
          <div>
            <img className="img_team" src="/image/team-1.png" alt="" />
            <div className="card">
              <h1 className="card_heading">Jone Due</h1>
              <p className="card_small_heading">Printing Lead</p>
            </div>
          </div>

          <div>
            <img className="img_team" src="/image/team-2.png" alt="" />
            <div className="card">
              <h1 className="card_heading">Jone Due</h1>
              <p className="card_small_heading">Printing Lead</p>
            </div>
          </div>

          <div>
            <img className="img_team" src="/image/team-3.png" alt="" />
            <div className="card">
              <h1 className="card_heading">Jone Due</h1>
              <p className="card_small_heading">Printing Lead</p>
            </div>
          </div>

          <div>
            <img className="img_team" src="/image/team-05.png" alt="" />
            <div className="card">
              <h1 className="card_heading">Jone Due</h1>
              <p className="card_small_heading">Printing Lead</p>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}
