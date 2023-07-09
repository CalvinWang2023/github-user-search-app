import { useState } from "react";

import "../App.css";
import "../styles/Navbar.css";

import sunIcon from "../assets/sunIcon.svg";
import moonIcon from "../assets/moonIcon.svg";

const Navbar = () => {
    const [moonTheme, setMoonTheme] = useState(true);

    if (moonTheme) {
        document.body.style.backgroundColor = 'var(--darkest-blue)';
    } else {
        document.body.style.backgroundColor = 'var(--very-light-blue)';
    }

    function themeHandler() {
        setMoonTheme(!moonTheme);
    }

    return (
        <div className="navbar">
            <h1>GithubFinder</h1>
            <div className="switch" onClick={themeHandler}>
                <p>{ moonTheme ? 'Light' : 'dark' }</p>
                { moonTheme && <img src={sunIcon} alt="Sun Icon" /> }
                { !moonTheme && <img src={moonIcon} alt="Moon Icon" /> }
            </div>
        </div>
    );
};

export default Navbar;