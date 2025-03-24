import React from "react"
import {getAllExperiments} from "../data/ExperimentApi"

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

              <li key="{experiment.id}" className="p-1 text-base text-slate-800">
               
              </li>

        </ul>
      </div>
    </div>
  )
}