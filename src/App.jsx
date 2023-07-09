import { createContext } from "react";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";

export const ThemeContext = createContext();

const App = () => {
    const [moonTheme, setMoonTheme] = useState(true);
    const themeContext = {
        moonTheme,
        setMoonTheme,
    };

    return (
        <div>
            <ThemeContext.Provider value={themeContext}>
                <Navbar />
                <Search />
            </ThemeContext.Provider>
        </div>
    );
};

export default App;