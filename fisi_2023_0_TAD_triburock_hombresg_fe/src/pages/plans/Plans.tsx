import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import tableColumns from "./tableColumns";
import PlansContent from "../../components/plans/PlansContent";
import PlanResponse from "../../fetching/get/res/PlanResponse";
import fetchPlansApi from "../../fetching/get/actions/fetchPlansApi";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Plans({name, onLogout}: Props) {
    const [records, setRecords] = useState<Array<PlanResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchPlansApi().then((res) => {
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
