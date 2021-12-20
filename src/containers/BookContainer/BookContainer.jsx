import Book from "../../components/Book";
import styles from "./BookContainer.module.scss";
import { getBooks } from "../../assets/data";

const BookContainer = () => {
    let result = getBooks().then(console.log);
    console.log(result);

    return (
        <div className={styles.bookContainer_flex}>
            <div className={styles.bookContainer_grid}>
                {result.map((book) => {
                    <Book
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                    ></Book>;
                })}
            </div>
        </div>
    );
};

export default BookContainer;
