import { useState } from "react";
import Button from "../Button";
import styles from "./SearchBar.module.scss";
import { getBooks } from "../../assets/data";

const SearchBar = (resultsCallback) => {
    const [myCurrentSearch, setMyCurrentSearch] = useState("");
    const handleChange = (event) => {
        setMyCurrentSearch(event.target.value);
    };

    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                value={myCurrentSearch}
                placeholder="Enter Text Here..."
                onInput={handleChange}
            />
            <Button
                label="search"
                clickHandler={() => {
                    getBooks(myCurrentSearch, resultsCallback);
                    // searchValuesObject.setSearchTerm(myCurrentSearch);
                    // console.log(searchValuesObject);
                    setMyCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

export default SearchBar;
