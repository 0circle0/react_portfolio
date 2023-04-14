import { memo, useMemo } from "react";
import getAboutMeData from "../../functions/getAboutMeData";
import Paragraphs from "../Paragraphs";

const About = () => {
    document.title = "About Me";

    const { 
        AboutMe, 
        Languages, 
        Technologies, 
        Frameworks 
    } = useMemo(() => getAboutMeData(), []);

    return (
        <>
            <Paragraphs Title="About Me" Data={AboutMe} />
            <Paragraphs Title="Languages" Data={Languages} CenterData={true} />
            <Paragraphs Title="Technologies" Data={Technologies} CenterData={true} />
            <Paragraphs Title="Frameworks" Data={Frameworks} CenterData={true} />
        </>
    );
}

export default memo(About);