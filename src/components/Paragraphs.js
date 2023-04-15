import { memo, useMemo } from "react";
import CreateKey from "../functions/createKey";

const Paragraphs = ({ title, data, centerData }) => {

    const keys = useMemo(() => data.map((item) => CreateKey(item)), [data])

    const items = useMemo(() =>
        data.map((item, index) =>
            <p key={keys[index]}>{item}</p>
        ), [data, keys]);

    return (
        <div className="w-75 m-auto mb-1 border p-3">
            <div className={`d-flex flex-column ${(centerData === true ? " align-items-center" : "")}`}>
                <h1 className="text-center">{title}</h1>
                {items}
            </div>
        </div >
    );
}

export default memo(Paragraphs);