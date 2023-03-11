import GetResponse from "../GetResponse";

import formattedDate from "../../../utils/FormattedDate";

export default interface IncomeResponse extends GetResponse {
    "IngresoId": number
    "TipoIngreso": string
    "UsuarioId": number
    "ClienteId": string
    "MontoTotal": string
    "Fecha": string
}

export class ParsedIncome implements GetResponse {
    static from(response: IncomeResponse): GetResponse {
        return {
            "IngresoId": response.IngresoId,
            "TipoIngreso": response.TipoIngreso,
            "UsuarioId": response.UsuarioId,
            "ClienteId": response.ClienteId,
            "MontoTotal": response.MontoTotal,
            "Fecha": formattedDate(response.Fecha)
        }
    }
}
