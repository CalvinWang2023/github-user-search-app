import { createContext } from "react";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import DetailedCard from "./components/DetailedCard";

export const AppContext = createContext();

const App = () => {
    const [moonTheme, setMoonTheme] = useState(true);
    const [userData, setUserData] = useState({});
    const [result, setResult] = useState(true);

    const appContext = {
        moonTheme,
        setMoonTheme,
        userData, 
        setUserData,
        result, 
        setResult,
    };

    return (
        <AppContext.Provider value={appContext}>
            <Navbar />
            <Search />
            <DetailedCard />
        </AppContext.Provider>
    );
};

export default App;