import { useCallback, useEffect, useMemo, useState } from "react";
import useWindowSize from './useWindowSize'

const useCollapsableNavigation = () => {
    const [collapseNavMenu, setCollapseNavMenu] = useState(false);
    const [containsCollapse, setContainsCollapse] = useState(false);

    const toggleNavMenu = useCallback(() => {
        setCollapseNavMenu(!collapseNavMenu);
    }, [collapseNavMenu, setCollapseNavMenu])

    const windowSize = useWindowSize();
    const element = useMemo(() => document.getElementsByClassName("collapseableMenu")[0], []);

    useEffect(() => {
        if (element) {
            if (windowSize[0] <= 640 && !containsCollapse) {
                element.classList.add('collapse')
                setContainsCollapse(true);
                setCollapseNavMenu(true);
            }
        }
    }, [containsCollapse, element, windowSize]);

    return { collapseNavMenu, toggleNavMenu }
}

export default useCollapsableNavigation;