import GetResponse from "../GetResponse";

export default interface ClientResponse extends GetResponse {
    'ClienteId': number
    'Nombre': string,
    'Apellido': string,
    'Email': string,
    'DNI': string,
    'Telefono': number
}
