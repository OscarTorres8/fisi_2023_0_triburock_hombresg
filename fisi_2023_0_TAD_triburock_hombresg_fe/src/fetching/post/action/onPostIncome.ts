import fetchOnPost from "../fetchOnPost";
import IncomeRequest from "../req/IncomeRequest";

export default async function onPostIncome(request: IncomeRequest) {
    return await fetchOnPost({
        url: 'http://localhost:3031/api/ingresos',
        request: request
    }).then((res) => (
        {
            ok: res.ok,
            json: res.json()
        }
    )).then(({ok, json}) => (
            {
                ok: ok,
                data: json.then((res) => res.data)
            }
        )
    )
}
