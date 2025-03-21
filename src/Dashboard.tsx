import React from 'react';
import './dashboard1.css';
export const Dashboard = () => {
  const value = 10;

  function handleBox() {

  }

  return (
    <div>
    <div className="header">Expo Hub</div>

    <div className="dashboard">
      <div className="box" onClick={handleBox}>Team1 {value}</div>
      <div className="box">Team2 {value}</div>
      <div className="box">Team3 {value}</div>
      <div className="box">Team4 {value}</div>
      <div className="box">Team5 {value}</div>
      <div className="box">Team6 {value}</div>
    </div>
      <button className="floating-btn">Login</button>
    </div>
)
}