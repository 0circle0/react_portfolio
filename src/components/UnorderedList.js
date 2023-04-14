import { memo, useMemo } from "react";
import { CreateKey } from "../functions/createKey";

const UnorderedList = ({ Title, List }) => {
    const keys = useMemo(() => List.map(item => CreateKey(item)), [List])

    return (
        <>
            <h2 className="d-flex justify-content-center">{Title}</h2>
            <div className="d-flex justify-content-center">
                <ul>
                    {List.map((item, index) => {
                        return (
                            <li key={keys[index]}>{item}</li>
                        )
                    }
                    )}
                </ul>
            </div>
        </>
    );
}

export default memo(UnorderedList);