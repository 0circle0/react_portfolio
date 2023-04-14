import ListGroup from "./ListGroup";
import { memo, useMemo } from "react";
import getSkillsData from "../functions/getSkillsData";

const Skills = () => {
    const {
        LanguageSkills,
        PrimarySkills,
        SecondarySkills
    } = useMemo(() => getSkillsData(), []);

    return (
        <div className="mt-5">
            <h2 className="d-flex justify-content-center">Skills</h2>
            <div className="d-flex justify-content-center">
                <div className="flex-column gap-3 d-flex align-items-center">
                    <ListGroup List={LanguageSkills} />
                    <ListGroup List={PrimarySkills} />
                    <ListGroup List={SecondarySkills} />
                </div>
            </div>
        </div>
    );
}
export default memo(Skills);