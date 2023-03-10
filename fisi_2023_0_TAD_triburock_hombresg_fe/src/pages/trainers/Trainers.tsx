import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import fetchApi from "../../fetching/get/fetchApi";
import TrainerResponse from "../../fetching/get/res/TrainerResponse";
import TrainerContent from "../../components/trainers/TrainerContent";
import tableColumns from "./tableColumns";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Trainers({name, onLogout}: Props) {
    const [records, setRecords] = useState<Array<TrainerResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchApi<TrainerResponse>({port: '3030', path: 'entrenadores'}).then((res) => {
                setRecords(res)
            }).finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <TrainerContent
                table={{
                    columns: tableColumns,
                    records: records
                }}
                loading={loading}
            />
        </div>
    )
}
