import CreateKey from "./CreateKey";
export default function ListGroupItem(props) {
    let Title = props.Title
    let List = props.List
    
    return (
        <li className="list-group-item border">
            {Title}
            <ul>
                {List.map((item) => {
                    let key = CreateKey();
                    return (
                    <li key={key}>{item}</li>
                    )
                }
                )}
            </ul>
        </li>
    );
}