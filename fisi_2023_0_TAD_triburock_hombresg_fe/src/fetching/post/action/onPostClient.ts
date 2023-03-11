import ClientRequest from "../req/ClientRequest";
import fetchOnPost from "../fetchOnPost";

export default async function onPostClient(request: ClientRequest) {
    return fetchOnPost({
        url: 'http://localhost:3030/api/clientes',
        request: request
    })
}
