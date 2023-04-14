import { memo, useMemo } from "react";
import { CreateKey } from "../functions/createKey";

const Paragraphs = ({ Title, Data, CenterData }) => {

    const keys = useMemo(() => Data.map((item) => CreateKey(item)), [Data])

    const items = useMemo(() => Data.map((item, index) => {
        return <p key={keys[index]}>{item}</p>
    }), [Data, keys]);

    return (
        <div className="w-75 m-auto mb-1 border p-3">
            <div className={`d-flex flex-column ${(CenterData === true ? " align-items-center" : "")}`}>
                <h1 className="text-center">{Title}</h1>
                {items}
            </div>
        </div >
    );
}

export default memo(Paragraphs);