import fetchApi from "../fetchApi";
import UserResponse from "../res/UserResponse";


export default async function fetchUsersApi() {
    const url = {
        "external": "https://apim-titaniumgym-prod-001.azure-api.net/rs-ne-gestion-de-personas/servicio-de-usuarios/v1/usuarios",
        "local": "http://localhost:3030/api/usuarios"
    }
    return fetchApi<UserResponse>({url: url.local})
}
