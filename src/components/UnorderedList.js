import { memo } from "react";

const UnorderedList = ({ title, list }) => {
    return (
        <>
            <h2 className="d-flex justify-content-center">{title}</h2>
            <div className="d-flex justify-content-center">
                <ul>
                    {list.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default memo(UnorderedList);