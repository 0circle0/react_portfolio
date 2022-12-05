export default function PersonalInfo(props) {
    let Address1 = props.Address1
    let Address2 = props.Address2
    let LinkedIn = props.LinkedIn
    let Email = props.Email
    let ImageTitle = props.ImageTitle
    let Image = props.Image
    return (
        <div className="d-flex justify-content-between mb-5 mb-lg-0">
            <img src={Image} className="faceImg rounded" title={ImageTitle} alt=""/>
            <div className="d-inline-flex list-group justify-content-start">
                <ul className="list-group">
                    <li className="email list-group-item">{Email}</li>
                </ul>
                <ul className="list-group border-0">
                    <li className="list-group-item">
                        {Address1}
                        <br />
                        {Address2}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href={LinkedIn}>LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}