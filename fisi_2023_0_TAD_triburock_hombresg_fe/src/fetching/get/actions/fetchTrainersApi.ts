import fetchApi from "../fetchApi";
import TrainerResponse from "../res/TrainerResponse";

export default async function fetchTrainersApi() {
    return fetchApi<TrainerResponse>({url: "http://localhost:3030/api/entrenadores"})
}
