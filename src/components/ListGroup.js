import { memo } from "react";

const ListGroup = ({ list }) => {
    return (
        <ul className="list-group justify-content-center d-flex flex-row p-sm-0 p-lg-1">
            {list.map((skill) => <li key={skill} className="list-group-item" aria-label={skill}>{skill}</li>)}
        </ul>
    );
}

export default memo(ListGroup);