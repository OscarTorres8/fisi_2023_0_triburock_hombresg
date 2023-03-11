import {useEffect, useState} from "react";
import "./Table.css"
import Pagination from "./Pagination";
import GetResponse from "../../../fetching/get/GetResponse";

export interface TableProps {
    columns: { name: string, icon: string }[],
    records: GetResponse[],
}

export default function Table({columns, records}: TableProps) {

    const lastIndex = Math.ceil(records.length / 10) - 1
    const [index, setIndex] = useState(0)
    const [data, setData] = useState(records.slice(0, 10))

    useEffect(() => {
        setData(records.slice(index * (10), (index + 1) * (10)))
    }, [index, records])

    return (
        <div id={"records"}>
            <div id={"options"}>
                <span><b>Total: </b>{records.length}</span>
                <span><b>Rows per page:</b> 10</span>
            </div>
            <table>
                <thead>
                <tr>
                    {
                        columns.map(({name, icon}, index) =>
                            <th key={index}>
                                <span
                                    className="material-symbols-outlined">{icon}
                                </span>
                                {name}
                            </th>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data.map((row, index) => (
                        <tr key={index}>
                            {
                                Object.values(row).map((cell, index) => <td key={index}>{cell}</td>)
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Pagination index={index} setIndex={setIndex} lastIndex={lastIndex}/>
        </div>
    )
}
