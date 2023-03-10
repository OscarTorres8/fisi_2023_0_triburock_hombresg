import ClientRequest from "../req/ClientRequest";

export default async function onPostClient(clientRequest: ClientRequest) {
    return await fetch('http://localhost:3030/api/clientes', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientRequest)
    })
}
