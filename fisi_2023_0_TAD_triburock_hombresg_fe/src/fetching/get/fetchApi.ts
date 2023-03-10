import GetResponse from "./res/GetResponse";

export default async function fetchApi<T extends GetResponse>({port, path}: { port: string, path: string }) {
    return await fetch(`http://localhost:${port}/api/${path}`)
        .then((res) => res.json())
        .then((res) => res as T[])
}
