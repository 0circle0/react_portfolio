import { memo, useMemo } from "react"
import getExperienceData from "../functions/getExperienceData"
import BoxGroupItems from "./BoxGroupItems"
import ListGroupItem from "./ListGroupItem"

const WorkExperience = () => {
    const {
        saicJob,
        securitasJob,
        tarusMediaJob,
        spriteCreatorJob,
        amazonJob,
        computerTechJob,
        walMartJob
    } = useMemo(() => getExperienceData(), []);

    return (
        <BoxGroupItems title="Experience">
            <ListGroupItem list={saicJob} title="SAIC Technology Integration Gateway" />
            <ListGroupItem list={securitasJob} title="Securitas USA" />
            <ListGroupItem list={tarusMediaJob} title="Taurus Media LLC" />
            <ListGroupItem list={spriteCreatorJob} title="Sprite Creator By CircleWorks" />
            <ListGroupItem list={amazonJob} title="Amazon" />
            <ListGroupItem list={computerTechJob} title="Computer Technician" />
            <ListGroupItem list={walMartJob} title="Wal-Mart" />
        </BoxGroupItems>
    );
}

export default memo(WorkExperience)