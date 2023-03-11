import fetchOnPost from "../fetchOnPost";
import IncomeRequest from "../req/IncomeRequest";

export default async function onPostIncome(request: IncomeRequest) {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-planes/servicio-de-ingresos/v1/ingresos",
        "local": "http://localhost:3031/servicio-de-ingresos/v1/ingresos"
    }
    return await fetchOnPost({
        url: url.local,
        request: request
    }).then((res) => res)
}
