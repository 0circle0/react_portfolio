import {CreateKey} from "./CreateKey";
export default function UnorderedList(props) {
    let Title = props.Title
    let List = props.List
    return (
        <>
            <h2 className="d-flex justify-content-center">{Title}</h2>
            <div className="d-flex justify-content-center">
                <ul>
                    {List.map(item => {
                        let key = CreateKey(item);
                        return (
                            <li key={key}>{item}</li>
                        )
                    }
                    )}
                </ul>
            </div>
        </>
    );
}