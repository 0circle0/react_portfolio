import { memo } from "react";

const PersonalInfo = ({ address1, address2, linkedIn, email }) => {
    return (
        <div className="d-flex justify-content-between mb-5 mb-lg-0">
            <div className="d-inline-flex list-group justify-content-start">
                <ul className="list-group">
                    <li className="email list-group-item">{email}</li>
                </ul>
                <ul className="list-group border-0">
                    <li className="list-group-item">
                        {address1}
                        <br />
                        {address2}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href={linkedIn}>LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default memo(PersonalInfo);