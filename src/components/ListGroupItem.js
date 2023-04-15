import { memo, useMemo } from "react";
import CreateKey from "../functions/createKey";

const ListGroupItem = ({ title, list }) => {
    let keys = useMemo(() => list.map((item) => CreateKey(item)), [list])

    return (
        <li className="list-group-item border">
            {title}
            <ul>
                {list.map((item, index) => <li key={keys[index]}>{item}</li>)}
            </ul>
        </li>
    );
}

export default memo(ListGroupItem);