import { createContext, useContext, useEffect } from "react";

import { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";

import "../styles/Search.css";

import { AppContext } from "../App";

export const DataContext = createContext();

const Search = () => {
    const { moonTheme, setUserData, result, setResult } = useContext(AppContext);

    const [searchUser, setSearchUser] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    
    async function searchUsers (username) {
        const response = await fetch(`https://api.github.com/users/${username}`, {cache: "no-cache"});

        // if error
        if (!response.ok) {
            setResult(false);
            setErrorMsg('No Result');
            return;
        }

        const data = await response.json();
        
        let date = new Date(data.created_at);
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        date = `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

        data.created_at = date;

        setUserData(data);

        setResult(true);
    };

    function onChangeHandler(e) {
        setSearchUser(e.target.value);
    }

    function keyDownHandler(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            SearchUserHandler();
        }
    }

    function SearchUserHandler() {
        if (searchUser === '') {
            setResult(false);
            setErrorMsg('Field Empty');
            return;
        }
        searchUsers(searchUser);
    }

    useEffect(() => {
        searchUsers("Octocat");
    }, []);

    return (
            <div className={ moonTheme ? "searchBar searchbarMoonTheme" : "searchBar searchbarSunTheme" }>
                <div className="search-container">
                    <img src={ searchIcon } alt="Search Icon" />
                    <input 
                        type="text" 
                        name="searchInput" 
                        placeholder="Search GitHub Username..." 
                        value={searchUser}
                        onChange={onChangeHandler}
                        onKeyDown={keyDownHandler}
                        className={ moonTheme ? "inputMoonTheme" : "inputSunTheme" } />
                </div>
                <p className="error">
                    { result ? '' : errorMsg }
                </p>
                <button onClick={SearchUserHandler}>Search</button>
            </div>
    );
};

export default Search;
