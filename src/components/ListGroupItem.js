import { CreateKey } from "./CreateKey";
export default function ListGroupItem({ Title, List }) {
    return (
        <li className="list-group-item border">
            {Title}
            <ul>
                {List.map((item) => {
                    let key = CreateKey(item);
                    return (
                        <li key={key}>{item}</li>
                    )
                }
                )}
            </ul>
        </li>
    );
}