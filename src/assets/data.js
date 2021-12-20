export const getBooks = async (searchTerm = "") => {
    if (searchTerm == "") {
        return;
    } else {
        try {
            const url =
                "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
            let response = await fetch(url);
            let json = await response.json();
            let items = await json.items[0];
            return items;
            // items is an array with object inside.
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
