import { NavLink } from "react-router-dom";

const NavItem = ({ to, name, icon }) => {
    return (
        <div className="nav-item px-3">
            <NavLink className="nav-link" to={to}>
                <span className={icon} aria-hidden="true"></span> {name}
            </NavLink>
        </div>
    )
}

export default NavItem;