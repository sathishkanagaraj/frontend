import axios from "axios";

const BASE_URL = 'http://localhost:8080/experiment'
export interface Experiment {
  id: number,
  title: string,
  description: string,
  detail: string,
  department: string
}

export const getAllExperiments = async () => {
  const response = await axios.get<Experiment[]>(`${BASE_URL}/all`);
  return response.data;
}
