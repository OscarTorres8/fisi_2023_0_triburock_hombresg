import "./../../layout/Content.css"
import Table, {TableProps} from "../shared/table/Table";
import Loading from "../shared/loading/Loading";
import AddIncome from "./AddIncome";
import PlanResponse from "../../fetching/get/res/PlanResponse";
import ClientResponse from "../../fetching/get/res/ClientResponse";

type Props = {
    table: TableProps,
    loading: boolean,
    plans: PlanResponse[],
    clients: ClientResponse[]
}

export default function IncomesContent({table: {columns, records}, loading, plans, clients}: Props) {
    return (
        <div id="content">
            <h1>Ingresos</h1>
            {
                loading ? <Loading name={"Cargando..."}/> : (
                    <>
                        <AddIncome plans={plans} clients={clients}/>
                        <Table columns={columns} records={records}></Table>
                    </>
                )
            }
        </div>
    )
}
