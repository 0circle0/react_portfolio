import { memo } from "react";

const BoxGroupItems = ({ title, children }) => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="d-flex justify-content-center">{title}</h2>
            <div className="d-flex justify-content-center">
                <ul className="list-group gap-1 w-75" >
                    {children}
                </ul>
            </div>
        </div>
    );
}

export default memo(BoxGroupItems);