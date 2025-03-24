import React, {useEffect, useState} from 'react';
import './dashboard1.css';
import {Experiment, getAllExperiments} from "./data/ExperimentApi";

export const Dashboard: React.FC = () => {
  const [experiments, setExperiments] = useState<Experiment[]>([]);

  const fetchExperiments = async() => {
    const experiments = await getAllExperiments();
    setExperiments(experiments)
  }

  useEffect(() => {
    fetchExperiments().then(r => console.log('experiments fetched..'));
  },[]);

  function handleBox() {

  }

  let value = 10;
  return (
    <div>
    <div className="header">Expo Hub</div>
      <span className="header" >Total Experiments : {experiments.length}</span>
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