import { memo } from "react";

const PersonalInfo = ({ Address1, Address2, LinkedIn, Email }) => {
    return (
        <div className="d-flex justify-content-between mb-5 mb-lg-0">
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

export default memo(PersonalInfo);