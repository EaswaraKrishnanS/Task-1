import React from "react";
import "./SideBar.css";
import supportIcon from "../Images/Support.png";
import assessmentIcon from "../Images/Assessment.png";
import learnIcon from "../Images/Online.png";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="text-section">
        <h2>Your health requirements are our first focus. 😊</h2>
        <p>
          Looking to speak with a professional, check your test score, or learn
          about various disorders?
        </p>
      </div>

      <div className="card-section">
        <div className="card">
          <img src={supportIcon} alt="Professional Support" />
          <p>Professional Support</p>
        </div>
        <div className="card card-yellow">
          <img src={assessmentIcon} alt="Online Assessment" />
          <p>Online Assessment</p>
        </div>
        <div className="card card-blue">
          <img src={learnIcon} alt="Learn Online" />
          <p>Learn Online</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
