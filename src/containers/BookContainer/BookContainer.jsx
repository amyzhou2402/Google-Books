import Book from "../../components/Book";
import styles from "./BookContainer.module.scss";

const BookContainer = ({ searchTerm }) => {
    const bookCards = searchTerm.map((book, index) => {
        console.log(searchTerm);
        return (
            <Book
                key={index}
                title={book.title}
                author={book.authors[0]}
                description={book.description}
                image={book.image}
            ></Book>
        );
    });

    return (
        <div className={styles.bookContainer_flex}>
            <div className={styles.bookContainer_grid}>{bookCards}</div>
        </div>
    );
};

export default BookContainer;
