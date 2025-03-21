import React from "react"
import {experiment_sp} from "../data/Experiment"

export const AddExperiment = () => {

  return(
    <div>
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">
        List Experiment
      </h2>
    </div>
      <div className="text-center p-5 text-xl">
        <h2 className="text-base text-slate-600">
          SP Experiment
        </h2>
        <ul className="list-none m-0 p-0">
          {experiment_sp.map(
            (experiment) => (
              <li key={experiment.id} className="p-1 text-base text-slate-800">
                {experiment.title}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}