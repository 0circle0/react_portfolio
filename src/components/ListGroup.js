import {CreateKey} from "./CreateKey";
export default function ListGroup(props) {
    let List = props.List

    return (
        <ul className="list-group justify-content-center list-group-horizontal-lg p-sm-0 p-lg-1">
            {List.map((skill) => {
                let key = CreateKey(skill);
                return (
                    <li key={key} className="list-group-item" aria-label={skill}>{skill}</li>
                )
            }
            )}
        </ul>
    );
}