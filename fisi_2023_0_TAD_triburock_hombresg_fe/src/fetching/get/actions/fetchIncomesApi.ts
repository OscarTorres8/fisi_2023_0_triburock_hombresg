import fetchApi from "../fetchApi";
import IncomeResponse from "../res/IncomeResponse";

export default async function fetchIncomesApi() {
    return fetchApi<IncomeResponse>({url: "http://localhost:3031/api/ingresos"})
}
