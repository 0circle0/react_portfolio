export default function ListGroupItem({ Title, List }) {
    return (
        <li className="list-group-item border">
            {Title}
            <ul>
                {List.map((item) => {
                    return (
                        <li key={item}>{item}</li>
                    )
                }
                )}
            </ul>
        </li>
    );
}