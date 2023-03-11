import {IncomeType} from "../../shared/IncomeType";

export default interface IncomeRequest {
    TipoIngreso: IncomeType
    UsuarioId: number
    ClienteId: number
    MontoTotal: number
    Fecha: string
}
