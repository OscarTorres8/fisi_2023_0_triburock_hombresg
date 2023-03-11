import "../../layout/Horizontal.css"
import VerticalNavBar from "../../components/shared/navigation/admin/VerticalNavBar";
import {links} from "../../common/AdminLink";
import {useEffect, useState} from "react";
import tableColumns from "./tableColumns";
import IncomesContent from "../../components/incomes/IncomesContent";
import PlanResponse from "../../fetching/get/res/PlanResponse";
import fetchPlansApi from "../../fetching/get/actions/fetchPlansApi";
import ClientResponse from "../../fetching/get/res/ClientResponse";
import fetchClientsApi from "../../fetching/get/actions/fetchClientsApi";
import fetchIncomesAndPlanApi from "../../fetching/get/actions/fetchIncomesAndPlanApi";
import {ParedIncomeAndPlanResponse} from "../../fetching/get/res/IncomeAndPlanResponse";

type Props = {
    name: string,
    onLogout?: () => void
}

export default function Incomes({name, onLogout}: Props) {
    const [incomes, setIncomes] = useState<Array<ParedIncomeAndPlanResponse>>([])
    const [plans, setPlans] = useState<Array<PlanResponse>>([])
    const [clients, setClients] = useState<Array<ClientResponse>>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetchIncomesAndPlanApi().then((res) => {
                setIncomes(res)
            }).then(() => fetchClientsApi())
                .then((res) => setClients(res))
                .then(() => fetchPlansApi())
                .then((res) => setPlans(res))
                .finally(() => setLoading(false))
        }, []
    )

    return (
        <div id="layout" className="horizontal">
            <VerticalNavBar user={name} links={links} onLogout={onLogout}/>
            <IncomesContent
                table={{
                    columns: tableColumns,
                    records: incomes
                }}
                loading={loading}
                plans={plans}
                clients={clients}
            />
        </div>
    )
}
