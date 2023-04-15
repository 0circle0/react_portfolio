import { memo, useMemo } from "react";
import getAboutMeData from "../../functions/getAboutMeData";
import Paragraphs from "../Paragraphs";

const About = () => {
    document.title = "About Me";

    const {
        aboutMe,
        languages,
        technologies,
        frameworks
    } = useMemo(() => getAboutMeData(), []);

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