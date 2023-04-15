import { memo, useMemo } from "react";
import getQualificationsData from "../functions/getQualificationsData";
import UnorderedList from "./UnorderedList";

const Qualifications = () => {
    const qualifications = useMemo(() => getQualificationsData(), []);

    return <UnorderedList list={qualifications} title="Summary of Qualifications" />;
}

export default memo(Qualifications);