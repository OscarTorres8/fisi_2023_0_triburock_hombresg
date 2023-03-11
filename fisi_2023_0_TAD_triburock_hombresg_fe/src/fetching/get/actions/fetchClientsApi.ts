import ClientResponse from "../res/ClientResponse";
import fetchApi from "../fetchApi";


export default async function fetchClientsApi() {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-clientes/v1/clientes",
        "local": "http://localhost:3030/api/clientes"
    }
    return fetchApi<ClientResponse>({url: url.local})
}
