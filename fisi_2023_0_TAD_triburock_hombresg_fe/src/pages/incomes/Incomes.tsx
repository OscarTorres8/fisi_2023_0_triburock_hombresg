import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import fetchApi from "../../fetching/get/fetchApi";
import tableColumns from "./tableColumns";
import IncomesContent from "../../components/incomes/IncomesContent";
import IncomeResponse from "../../fetching/get/res/IncomeResponse";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Incomes({name, onLogout}: Props) {
    const [records, setRecords] = useState<Array<IncomeResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchApi<IncomeResponse>({port: '3031', path: 'ingresos'}).then((res) => {
                setRecords(res)
            }).finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <IncomesContent
                table={{
                    columns: tableColumns,
                    records: records
                }}
                loading={loading}
            />
        </div>
    )
}
