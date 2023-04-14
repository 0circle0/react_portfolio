import { CreateKey } from "../functions/createKey";
import { memo, useMemo } from "react";

const ListGroup = ({ List }) => {
    const keys = useMemo(() => List.map((item) => CreateKey(item)), [List]);

    return (
        <ul className="list-group justify-content-center d-flex flex-row p-sm-0 p-lg-1">
            {List.map((skill, index) => <li key={keys[index]} className="list-group-item" aria-label={skill}>{skill}</li>)}
        </ul>
    );
}
export default memo(ListGroup);