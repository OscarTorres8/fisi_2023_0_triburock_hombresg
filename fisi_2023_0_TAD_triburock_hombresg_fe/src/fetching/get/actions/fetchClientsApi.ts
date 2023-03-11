import ClientResponse from "../res/ClientResponse";
import fetchApi from "../fetchApi";


export default async function fetchClientsApi() {
    return fetchApi<ClientResponse>({url: "http://localhost:3030/api/clientes"})
}
