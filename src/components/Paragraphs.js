import { memo, useMemo } from "react";

const Paragraphs = ({ title, data, centerData }) => {

    const items = useMemo(() => data.map((item) => <p key={item}>{item}</p>), [data]);

    return (
        <div className="w-75 m-auto mb-1 border p-3">
            <div className={`d-flex flex-column ${(centerData === true ? " align-items-center" : "")}`}>
                <h1 className="text-center">{title}</h1>
                {items}
            </div>
        </div >
    );
}

export default memo(Paragraphs);