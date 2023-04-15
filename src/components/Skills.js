import ListGroup from "./ListGroup";
import { memo, useMemo } from "react";
import getSkillsData from "../functions/getSkillsData";

const Skills = () => {
    const skills = useMemo(() => getSkillsData(), []);

    return (
        <div className="mt-5">
            <h2 className="d-flex justify-content-center">Skills</h2>
            <div className="d-flex justify-content-center">
                <div className="flex-column gap-3 d-flex align-items-center">
                    {skills.map((list) => <ListGroup key={list} list={list} />)}
                </div>
            </div>
        </div>
    );
}
export default memo(Skills);