import { memo } from "react";
import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

const Certs = () => {
    return (
        <BoxGroupItems title="Certifications">
            <ListGroupItem list={["Expires 10/17/2025"]} title="Security+ 601" />
        </BoxGroupItems>
    );
}

export default memo(Certs);