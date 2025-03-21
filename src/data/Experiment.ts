interface Experiment {
  id: number,
  title: string,
  description: string,
  detail: string,
  department: string
}

export const experiment_sp : Experiment[]=[
  {
    id: 1,
    title: "Test signoff through pipeline",
    description: "Functional test automation suite execution through pipeline.",
    department: "SP",
    detail:""
  },
  {
    id: 2,
    title: "BlueGreen Deployment",
    description: "BlueGreen deployment in AWS infrastructure",
    department: "SP",
    detail:""
  },
  {
    id: 3,
    title: "Light Switch",
    description: "Switch off AWS resources when not in use.",
    department: "SP",
    detail:""
  }
];

