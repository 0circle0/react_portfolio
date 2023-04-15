import { memo, useMemo } from "react";
import getEducationData from "../functions/getEducationData";
import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

const Education = () => {
    const highSchool = useMemo(() => getEducationData(), []);

    return (
        <BoxGroupItems title="Education">
            <ListGroupItem list={highSchool} title="High School" />
        </BoxGroupItems>
    );
}

export default memo(Education);
