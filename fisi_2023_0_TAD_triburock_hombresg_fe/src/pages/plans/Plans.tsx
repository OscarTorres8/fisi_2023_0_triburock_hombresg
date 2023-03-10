import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import fetchApi from "../../fetching/get/fetchApi";
import tableColumns from "./tableColumns";
import PlansContent from "../../components/plans/PlansContent";
import PlanResponse from "../../fetching/get/res/PlanResponse";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Plans({name, onLogout}: Props) {
    const [records, setRecords] = useState<Array<PlanResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchApi<PlanResponse>({port: '3031', path: 'planes'}).then((res) => {
                setRecords(res)
            }).finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <PlansContent
                table={{
                    columns: tableColumns,
                    records: records
                }}
                loading={loading}
            />
        </div>
    )
}
