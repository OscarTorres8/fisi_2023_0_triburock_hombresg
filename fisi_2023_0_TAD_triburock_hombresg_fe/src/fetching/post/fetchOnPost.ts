import PostRequest from "./PostRequest";

export default async function fetchOnPost<T extends PostRequest>({url, request}: { url: string, request: T }) {
    return await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'c15de1d252f2459a9811cfb32fbda081'
        },
        body: JSON.stringify(request)
    })
}
