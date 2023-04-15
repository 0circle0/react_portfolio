import { memo, useEffect, useMemo } from "react";
import getAboutMeData from "../../functions/getAboutMeData";
import Paragraphs from "../Paragraphs";

const About = () => {

    const tiles = useMemo(() => getAboutMeData(), []);

    useEffect(() => {
        document.title = "About Me";
    }, [])

    return (
        <>
            {tiles.map(({ id, data, centerData }) =>
                <Paragraphs key={id} title="About Me" data={data} centerData={centerData} />
            )}
        </>
    );
}

export default memo(About);