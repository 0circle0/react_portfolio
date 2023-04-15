import ListGroup from "./ListGroup";
import { memo, useMemo } from "react";
import getSkillsData from "../functions/getSkillsData";

const Skills = () => {
    const {
        languageSkills,
        primarySkills,
        secondarySkills
    } = useMemo(() => getSkillsData(), []);

    return (
        <div className="mt-5">
            <h2 className="d-flex justify-content-center">Skills</h2>
            <div className="d-flex justify-content-center">
                <div className="flex-column gap-3 d-flex align-items-center">
                    <ListGroup list={languageSkills} />
                    <ListGroup list={primarySkills} />
                    <ListGroup list={secondarySkills} />
                </div>
            </div>
        </div>
    );
}
export default memo(Skills);