import PostRequest from "../PostRequest";

export default interface ClientRequest extends PostRequest {
    "Nombre": string,
    "Apellido": string,
    "Email": string,
    "DNI": string,
    "Telefono": number
}
