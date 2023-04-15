import { memo } from "react";

const ListGroupItem = ({ title, list }) => {
    return (
        <li className="list-group-item border">
            <span>{title}</span>
            <ul>
                {list.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </li>
    );
}

export default memo(ListGroupItem);