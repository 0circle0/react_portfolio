import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

export default function() {
    let certs = ["Expires 10/17/2025"]
    return (
        <BoxGroupItems Title="Certifications">
            <ListGroupItem List={certs} Title="Security+ 601" />
        </BoxGroupItems>
    );
}