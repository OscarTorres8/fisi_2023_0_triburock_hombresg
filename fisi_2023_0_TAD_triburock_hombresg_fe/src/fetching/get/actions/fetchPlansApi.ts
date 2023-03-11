import fetchApi from "../fetchApi";
import PlanResponse from "../res/PlanResponse";

export default async function fetchPlansApi() {
    return fetchApi<PlanResponse>({url: "http://localhost:3031/api/planes"})
}
