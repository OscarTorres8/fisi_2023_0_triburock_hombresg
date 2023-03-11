import fetchApi from "../fetchApi";
import UserResponse from "../res/UserResponse";


export default async function fetchUsersApi() {
    return fetchApi<UserResponse>({url: "http://localhost:3030/api/usuarios"})
}
