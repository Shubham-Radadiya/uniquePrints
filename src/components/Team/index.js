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
          <div className="team">
            <img className="img_team" src="/image/team-1.png" alt="" />
            <div className="card">
              <div className="logo_flex">
                <h1 className="card_heading">Jone Due</h1>
                <img src="/image/014-instagram.png" alt="" style={{ margin: ' 15px 0 0 80px', height: '5%' }} />
              </div>

              <div >
                <p className="card_small_heading">Printing Lead  <img src="/image/013-facebook.png" alt="" className="facebook" /></p>
              </div>

            </div>
          </div>

          <div  className="team">
            <img className="img_team" src="/image/team-2.png" alt="" />
            <div className="card">
            <div className="logo_flex">
                <h1 className="card_heading">Jone Due</h1>
                <img src="/image/014-instagram.png" alt="" style={{ margin: ' 15px 0 0 80px', height: '5%' }} />
              </div>

              <div >
                <p className="card_small_heading">Printing Lead  <img src="/image/013-facebook.png" alt="" className="facebook" /></p>
              </div>
            </div>
          </div>

          <div className="team">
            <img className="img_team" src="/image/team-3.png" alt="" />
            <div className="card">
            <div className="logo_flex">
                <h1 className="card_heading">Jone Due</h1>
                <img src="/image/014-instagram.png" alt="" style={{ margin: ' 15px 0 0 80px', height: '5%' }} />
              </div>

              <div >
                <p className="card_small_heading">Printing Lead  <img src="/image/013-facebook.png" alt="" className="facebook" /></p>
              </div>
            </div>
          </div>

          <div className="team">
            <img className="img_team" src="/image/team-05.png" alt="" />
            <div className="card">
            <div className="logo_flex">
                <h1 className="card_heading">Jone Due</h1>
                <img src="/image/014-instagram.png" alt="" style={{ margin: ' 15px 0 0 80px', height: '5%' }} />
              </div>

              <div >
                <p className="card_small_heading">Printing Lead  <img src="/image/013-facebook.png" alt="" className="facebook" /></p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}
