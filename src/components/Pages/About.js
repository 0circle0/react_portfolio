import { memo, useEffect, useMemo } from "react";
import getAboutMeData from "../../functions/getAboutMeData";
import Paragraphs from "../Paragraphs";

const About = () => {

    const {
        aboutMe,
        languages,
        technologies,
        frameworks
    } = useMemo(() => getAboutMeData(), []);

    useEffect(() => {
        document.title = "About Me";
    }, [])

    return (
        <>
            <Paragraphs title="About Me" data={aboutMe} />
            <Paragraphs title="Languages" data={languages} centerData />
            <Paragraphs title="Technologies" data={technologies} centerData />
            <Paragraphs title="Frameworks" data={frameworks} centerData />
        </>
    );
}

export default memo(About);