import defaultImg from "../assets/default-book.jpg";
const errorImg = defaultImg;

export const getBooks = async (currentQuery, callback) => {
    if (currentQuery == "") {
        return;
    } else {
        try {
            const url =
                "https://www.googleapis.com/books/v1/volumes?q=" + currentQuery;
            let response = await fetch(url);
            let json = await response.json();

            let bookInfo = json.items.map((book) => book.volumeInfo);
            // bookInfo is an array with object inside.
            console.log(bookInfo);
            let results = bookInfo.map((book) => {
                const result = {
                    title: book.title,
                    authors: book.authors,
                    description: book.description,
                    image:
                        book.imageLinks === undefined
                            ? `${errorImg}`
                            : `${book.imageLinks.thumbnail}`,
                    preview: book.previewLink,
                };
                return result;
            });
            callback(results);
        } catch (err) {
            console.log("fetch failed", err);
        }
    }
};

// export const data = [
//     {
//         title: "something",
//         author: "someone",
//         description: "description",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/300px-Gull_portrait_ca_usa.jpg",
//     },
// ];
