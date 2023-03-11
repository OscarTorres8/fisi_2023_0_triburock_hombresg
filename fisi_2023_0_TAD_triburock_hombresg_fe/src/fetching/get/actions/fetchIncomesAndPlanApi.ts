import fetchApi from "../fetchApi";
import IncomeAndPlanResponse, {ParedIncomeAndPlanResponse} from "../res/IncomeAndPlanResponse";

export default async function fetchIncomesAndPlanApi() {
    const url = {
        "external": "",
        "local": "http://localhost:3031/servicio-de-ingresos/v1/ingresos/plan"
    }
        return fetchApi<IncomeAndPlanResponse>({url: url.local})
        .then((res) => res.map((response) => ParedIncomeAndPlanResponse.from(response)))
}
