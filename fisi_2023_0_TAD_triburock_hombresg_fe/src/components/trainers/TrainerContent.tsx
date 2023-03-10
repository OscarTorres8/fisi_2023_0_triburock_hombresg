import "./../../layout/Content.css"
import Table, {TableProps} from "../shared/table/Table";
import Loading from "../shared/loading/Loading";

export default function TrainerContent({table: {columns, records}, loading}: { table: TableProps, loading: boolean }) {
    return (
        <div id="content">
            <h1>Entrenadores</h1>
            {
                loading ? <Loading name={"Cargando..."}/> : <Table columns={columns} records={records}></Table>
            }
        </div>
    )
}
