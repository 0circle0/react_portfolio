export default function BoxGroupItems(props) {
    let Title = props.Title
    let children = props.children
    return (
        <div className="mt-5 mb-5">
            <h2 className="d-flex justify-content-center">{Title}</h2>
            <div className="d-flex justify-content-center">
                <ul className="list-group gap-1 w-75" role="list">
                    {children}
                </ul>
            </div>
        </div>
    );
}