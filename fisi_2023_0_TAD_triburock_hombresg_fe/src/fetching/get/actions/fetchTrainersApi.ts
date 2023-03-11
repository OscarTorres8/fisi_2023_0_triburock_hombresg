import fetchApi from "../fetchApi";
import TrainerResponse from "../res/TrainerResponse";

export default async function fetchTrainersApi() {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-entrenadores/v1/entrenadores",
        "local": "http://localhost:3030/api/entrenadores"
    }
    return fetchApi<TrainerResponse>({url: url.local})
}
