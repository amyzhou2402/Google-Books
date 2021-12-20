import "./App.css";
import SearchBar from "./components/SearchBar";
import BookContainer from "./containers/BookContainer";
import HeaderContainer from "./containers/HeaderContainer";
import { useState } from "react";
import { data, getBooks } from "./assets/data";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const searchValuesObject = { searchTerm, setSearchTerm };

    let bookContainer = undefined;

    if (searchTerm !== "") {
        bookContainer = <BookContainer searchTerm={searchTerm}></BookContainer>;
        //otherwise it is undefined and won't be displayed
    }

    return (
        <div className="App">
            <HeaderContainer></HeaderContainer>
            <SearchBar searchValues={searchValuesObject}></SearchBar>
            {BookContainer}
        </div>
    );
}

export default App;
