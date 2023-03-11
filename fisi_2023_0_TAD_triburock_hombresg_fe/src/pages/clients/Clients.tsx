import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/admin/VerticalNavBar";
import {links} from "../../common/AdminLink";
import ClientContent from "../../components/clients/ClientContent";
import {useEffect, useState} from "react";
import ClientResponse from "../../fetching/get/res/ClientResponse";
import tableColumns from "./tableColumns";
import fetchClientsApi from "../../fetching/get/actions/fetchClientsApi";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Clients({name, onLogout}: Props) {
    const [records, setRecords] = useState<Array<ClientResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchClientsApi().then((res) => {
                setRecords(res)
            }).finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <ClientContent
                table={{
                    columns: tableColumns,
                    records: records
                }}
                loading={loading}
            />
        </div>
    )
}
