import { memo, useMemo } from "react";
import getEducationData from "../functions/getEducationData";
import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

const Education = () => {
    const HighSchool = useMemo(() => getEducationData(), []);

    return (
        <BoxGroupItems Title="Education">
            <ListGroupItem List={HighSchool} Title="High School" />
        </BoxGroupItems>
    );
}

export default memo(Education);
