export default function PersonalInfo(props) {
    let Address1 = props.Address1
    let Address2 = props.Address2
    let LinkedIn = props.LinkedIn
    let Email = props.Email
    let ImageTitle = props.ImageTitle
    let Image = props.Image
    return (
        <div className="d-flex justify-content-between mb-5 mb-lg-0">
            <img src={Image} className="faceImg rounded" title={ImageTitle} role="img" />
            <div className="d-inline-flex list-group justify-content-start">
                <ul className="list-group" role="list">
                    <li className="email list-group-item" role="listitem">{Email}</li>
                </ul>
                <ul className="list-group border-0" role="list">
                    <li className="list-group-item" role="listitem">
                        {Address1}
                        <br />
                        {Address2}
                    </li>
                </ul>
                <ul className="list-group" role="list">
                    <li className="list-group-item" role="listitem">
                        <a href={LinkedIn} role="link">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}