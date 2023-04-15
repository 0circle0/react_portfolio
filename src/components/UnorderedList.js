import { memo, useMemo } from "react";
import CreateKey from "../functions/createKey";

const UnorderedList = ({ title, list }) => {
    const keys = useMemo(() => list.map(item => CreateKey(item)), [list])

    return (
        <>
            <h2 className="d-flex justify-content-center">{title}</h2>
            <div className="d-flex justify-content-center">
                <ul>
                    {list.map((item, index) => <li key={keys[index]}>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default memo(UnorderedList);