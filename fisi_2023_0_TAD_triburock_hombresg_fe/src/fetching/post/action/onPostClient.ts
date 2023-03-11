import ClientRequest from "../req/ClientRequest";
import fetchOnPost from "../fetchOnPost";

export default async function onPostClient(request: ClientRequest) {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-clientes/v1/clientes",
        "local": "http://localhost:3030/api/clientes"
    }
    return fetchOnPost({
        url: url.local,
        request: request
    })
}
