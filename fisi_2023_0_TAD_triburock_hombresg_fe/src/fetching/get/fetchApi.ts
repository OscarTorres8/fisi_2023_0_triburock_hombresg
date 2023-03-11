import GetResponse from "./GetResponse";

export default async function fetchApi<T extends GetResponse>({url}: {url: string}) {
    return await fetch(url)
        .then((res) => res.json())
        .then((res) => res as T[])
}
