import { memo, useMemo } from "react";
import { CreateKey } from "../functions/createKey";

const ListGroupItem = ({ Title, List }) => {
    let keys = useMemo(() => List.map((item) => CreateKey(item)), [List])

    return (
        <li className="list-group-item border">
            {Title}
            <ul>
                {List.map((item, index) => <li key={keys[index]}>{item}</li>)}
            </ul>
        </li>
    );
}

export default memo(ListGroupItem);