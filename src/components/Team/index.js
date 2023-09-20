import React from "react";
import "./index.css";
import {PiInstagramLogoThin} from 'react-icons/pi'
import {RiFacebookLine} from 'react-icons/ri'
export default function Team() {
  return (
    <>
      <div>
        <div>
          <h2 className="small_team_heading">meet our team</h2>
          <h1 className="team_heading">Team Members</h1>
        </div>
        <div className="card_flex">
          <div className="team">
            <img className="img_team" src="/image/team-1.png" alt="" />
            <div className="card">
            <div >
                <h1 className="card_heading">Jone Due  <PiInstagramLogoThin className="insta"/> </h1> 
                <p className="card_small_heading">Printing Lead  <RiFacebookLine className="facebook"/></p>
              </div>

            </div>
          </div>

          <div  className="team">
            <img className="img_team" src="/image/team-2.png" alt="" />
            <div className="card">
            <div >
                <h1 className="card_heading">Jone Due  <PiInstagramLogoThin className="insta"/> </h1> 
                <p className="card_small_heading">Printing Lead  <RiFacebookLine className="facebook"/></p>
              </div>
            </div>
          </div>

          <div className="team">
            <img className="img_team" src="/image/team-3.png" alt="" />
            <div className="card">
            <div >
                <h1 className="card_heading">Jone Due  <PiInstagramLogoThin className="insta"/> </h1> 
                <p className="card_small_heading">Printing Lead  <RiFacebookLine className="facebook"/></p>
              </div>
            </div>
          </div>

          <div className="team">
            <img className="img_team" src="/image/team-05.png" alt="" />
            <div className="card">
            <div >
                <h1 className="card_heading">Jone Due  <PiInstagramLogoThin className="insta"/> </h1> 
                <p className="card_small_heading">Printing Lead  <RiFacebookLine className="facebook"/></p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}
