import fetchApi from "../fetchApi";
import IncomeResponse, {ParsedIncome} from "../res/IncomeResponse";

export default async function fetchIncomesApi() {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-planes/servicio-de-ingresos/v1/ingresos",
        "local": "http://localhost:3031/servicio-de-ingresos/v1/ingresos"
    }
        return fetchApi<IncomeResponse>({url: url.local})
        .then((res) => res.map((response) => ParsedIncome.from(response)))
}
