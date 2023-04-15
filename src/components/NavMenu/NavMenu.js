import './NavMenu.css'
import NavItem from "./NavItem";
import useCollapsableNavigation from "../../hooks/useCollapsableNavigation";
import getNavItems from '../../functions/getNavItems';
import { useMemo } from 'react';

const NavMenu = () => {
    const { collapseNavMenu, toggleNavMenu } = useCollapsableNavigation();
    const navItems = useMemo(() => getNavItems(), [])

    return (
        <>
            <div className="top-row ps-3 navbar navbar-light shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Brian Paul Jensen II</a>
                    <button title="Navigation menu" className="navbar-toggler" onClick={toggleNavMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className={collapseNavMenu ? "collapseableMenu collapse" : "collapseableMenu"}>
                <nav className="flex-column" role="navigation">
                    {navItems.map(({ to, name, icon }) => <NavItem to={to} name={name} icon={icon} />)}
                </nav>
            </div>
        </>
    );
}

export default NavMenu;