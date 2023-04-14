import { memo, useMemo } from "react";
import getQualificationsData from "../functions/getQualificationsData";
import UnorderedList from "./UnorderedList";

const Qualifications = () => {
    const Qualifications = useMemo(() => getQualificationsData(), []);

    return (
        <UnorderedList List={Qualifications} Title="Summary of Qualifications" />
    );
}

export default memo(Qualifications);