import { useContext } from "react";

import { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";

import "../styles/Search.css";

import { ThemeContext } from "../App";

const Search = () => {
    const { moonTheme } = useContext(ThemeContext);

    const [userData, setUserData] = useState({});
    const [searchUser, setSearchUser] = useState('');

    async function searchUsers (username) {
        const response = await fetch(`https://api.github.com/users/${username}`);

        // if error
        if (!response.ok) {
            //TODO
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

        console.log(data);
    };

    function onChangeHandler(e) {
        setSearchUser(e.target.value);
    }

    function keyDownHandler(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            SearchUserHandler(searchUser);
        }
    }

    function SearchUserHandler() {
        searchUsers(searchUser);
    }

    return (
        <div className={ moonTheme ? "searchBar searchbarMoonTheme" : "searchBar searchbarSunTheme" }>
            <img src={ searchIcon } alt="Search Icon" />
            <input 
                type="text" 
                name="searchInput" 
                placeholder="Search GitHub Username..." 
                value={searchUser}
                onChange={onChangeHandler}
                onKeyDown={keyDownHandler}
                className={ moonTheme ? "inputMoonTheme" : "inputSunTheme" } />
            <button onClick={SearchUserHandler}>Search</button>
        </div>
    );
};

export default Search;
