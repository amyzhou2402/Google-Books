import { useState } from "react";
import Button from "../Button";
import styles from "./SearchBar.module.scss";

const SearchBar = (searchValuesObject) => {
    //
    const [myCurrentSearch, setMyCurrentSearch] = useState("");

    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                value={myCurrentSearch}
                placeholder="search"
                onInput={(event) => {
                    setMyCurrentSearch(event.target.value);
                }}
            />
            <Button
                label="search"
                clickHandler={() => {
                    searchValuesObject.setSearchTerm(myCurrentSearch);
                    console.log(searchValuesObject);
                    setMyCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

export default SearchBar;
