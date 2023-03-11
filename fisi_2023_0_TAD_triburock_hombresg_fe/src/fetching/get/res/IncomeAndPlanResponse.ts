import GetResponse from "../GetResponse";
import formattedDate from "../../../utils/FormattedDate";

export default interface IncomeAndPlanResponse extends GetResponse {
    IngresoId: number;
    Usuario: string;
    Cliente: string;
    MontoTotal: string;
    Fecha: Date;
    Nombre: string;
}

export class ParedIncomeAndPlanResponse implements GetResponse {
    static from(response: IncomeAndPlanResponse): GetResponse {
        return {
            'IngresoId': response.IngresoId,
            'Usuario': response.Usuario,
            'Cliente': response.Cliente,
            'MontoTotal': response.MontoTotal,
            'Fecha': formattedDate(response.Fecha),
            'Nombre': response.Nombre
        }
    }
}
