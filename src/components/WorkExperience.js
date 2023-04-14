import { memo, useMemo } from "react"
import getExperienceData from "../functions/getExperienceData"
import BoxGroupItems from "./BoxGroupItems"
import ListGroupItem from "./ListGroupItem"

const WorkExperience = () => {
    const {
        SAICJob,
        SecuritasJob,
        TarusMediaJob,
        SpriteCreatorJob,
        AmazonJob,
        ComputerTechJob,
        WalMartJob
    } = useMemo(() => getExperienceData(), []);

    return (
        <BoxGroupItems Title="Experience">
            <ListGroupItem List={SAICJob} Title="SAIC Technology Integration Gateway" />
            <ListGroupItem List={SecuritasJob} Title="Securitas USA" />
            <ListGroupItem List={TarusMediaJob} Title="Taurus Media LLC" />
            <ListGroupItem List={SpriteCreatorJob} Title="Sprite Creator By CircleWorks" />
            <ListGroupItem List={AmazonJob} Title="Amazon" />
            <ListGroupItem List={ComputerTechJob} Title="Computer Technician" />
            <ListGroupItem List={WalMartJob} Title="Wal-Mart" />
        </BoxGroupItems>
    );
}

export default memo(WorkExperience)