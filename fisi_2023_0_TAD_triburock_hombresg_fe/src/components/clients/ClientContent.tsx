import "./../../layout/Content.css"
import Table, {TableProps} from "../shared/table/Table";
import Loading from "../shared/loading/Loading";
import "./ClientContent.css"
import AddClient from "./postClient/AddClient";

export default function ClientContent({table: {columns, records}, loading}: { table: TableProps, loading: boolean }) {
    return (
        <div id="content">
            <h1>Clients</h1>
            {
                loading ? (<Loading name={"Cargando..."}/>)
                    : (
                        <>
                            <AddClient/>
                            <Table columns={columns} records={records}></Table>
                        </>
                    )
            }
        </div>
    )
}
