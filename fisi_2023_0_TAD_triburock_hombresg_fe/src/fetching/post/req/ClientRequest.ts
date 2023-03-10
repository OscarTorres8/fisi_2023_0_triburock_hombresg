import PostRequest from "./Rquest";

export default interface ClientRequest extends PostRequest {
    "Nombre": string,
    "Apellido": string,
    "Email": string,
    "DNI": string,
    "Telefono": number
}
