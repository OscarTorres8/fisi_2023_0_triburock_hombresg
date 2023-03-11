import {Dispatch} from "react";
import {Styles} from "../button/Button";
import {Theme} from "../../../common/Theme";
import "./Pagination.css"
import IconButton from "../button/IconButton";

type Props = {
    index: number,
    setIndex: Dispatch<number>
    lastIndex: number,
}
export default function Pagination({index, setIndex, lastIndex}: Props) {
    return (
        <div id="pagination">
            <span><b>Página: </b>{index + 1} de {lastIndex + 1}</span>
            <IconButton
                icon={"arrow_back"}
                style={Styles.Outline}
                theme={Theme.Light}
                disable={index === 0}
                onClick={() => setIndex((index - 1) >= 0 ? index - 1 : index)}
            />
            <IconButton
                icon={"arrow_forward"}
                style={Styles.Outline}
                theme={Theme.Light}
                disable={index === lastIndex}
                onClick={() => setIndex((index + 1) <= lastIndex ? index + 1 : index)}
            />
        </div>
    )
}
