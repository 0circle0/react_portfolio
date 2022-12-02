import { useState } from "react";
import { Link } from "react-router-dom";
import '../NavMenu.css'

export default function NavMenu() {

    let [collapseNavMenu, setCollapseNavMenu] = useState(false);
    function ToggleNavMenu() {
        setCollapseNavMenu(!collapseNavMenu)
    }

    let NavMenuCssClass = collapseNavMenu ? "collapse" : "";

    return (
        <>
            <div className="top-row ps-3 navbar navbar-light shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Brian Paul Jensen II</a>
                    <button title="Navigation menu" className="navbar-toggler" onClick={ToggleNavMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className={NavMenuCssClass}>
                <nav className="flex-column" role="navigation">
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/">
                            <span className="oi oi-folder" aria-hidden="true"></span> Portfolio
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/resume">
                            <span className="oi oi-person" aria-hidden="true"></span> Resume
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/about">
                            <span className="oi oi-question-mark" aria-hidden="true"></span> About
                        </Link>
                    </div>
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/contactme">
                            <span className="oi oi-envelope-open" aria-hidden="true"></span> Contact Me
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}