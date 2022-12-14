export default function ListGroup({ List }) {
    return (
        <ul className="list-group justify-content-center list-group-horizontal-lg p-sm-0 p-lg-1">
            {List.map((skill) => {
                return (
                    <li key={skill} className="list-group-item" aria-label={skill}>{skill}</li>
                )
            }
            )}
        </ul>
    );
}