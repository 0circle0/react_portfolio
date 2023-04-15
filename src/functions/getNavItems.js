import About from "../components/Pages/About";
import ContactMe from "../components/Pages/ContactMe";
import Home from "../components/Pages/Home";
import Resume from "../components/Pages/Resume";

const getNavItems = () => {
    return [
        {
            to: "/",
            name: "Portfolio",
            icon: "oi oi-folder",
            path: "",
            element: <Home />
        },
        {
            to: "/resume",
            name: "Resume",
            icon: "oi oi-person",
            path: "resume",
            element: <Resume />
        },
        {
            to: "/about",
            name: "About",
            icon: "oi oi-question-mark",
            path: "about",
            element: <About />
        },
        {
            to: "/contactme",
            name: "Contact Me",
            icon: "oi oi-envelope-open",
            path: "contactme",
            element: <ContactMe />
        }
    ]
}

export default getNavItems;