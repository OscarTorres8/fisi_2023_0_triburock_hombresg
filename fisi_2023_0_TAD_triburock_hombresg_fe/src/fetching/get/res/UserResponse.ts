import GetResponse from "../GetResponse";

export default interface UserResponse extends GetResponse {
    UsuarioId:   number;
    Nombre:      string;
    Apellido:    string;
    Email:       string;
    DNI:         string;
    Creado:      Date;
    Telefono:    string;
    Contrasenia: string;
}
