import styles from "./Book.module.scss";
import { getBooks } from "../../assets/data";
import { useState } from "react";

const Book = ({
    image = "image link not found",
    title = "title not found",
    author = "author not found",
    description = "description not found",
}) => {
    return (
        <div className={styles.book_body}>
            <p>Title</p>
            <p>Author</p>
            <p>Description</p>
        </div>
    );
};

export default Book;
