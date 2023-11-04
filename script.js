const books = [];

function addBook(title, author) {
    const isDuplicate = books.some(book => book.title === title && book.author === author);
    if (!isDuplicate) {
        const newBook = { title, author };
        books.push(newBook);
        updateBookList();
    } else {
        alert("This book already exists in the library.");
    }
}
function updateBookList() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

const addBookForm = document.getElementById("add-book-form");
addBookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    addBook(titleInput.value, authorInput.value);
    titleInput.value = "";
    authorInput.value = "";
});

const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");
searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => {
        return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
    });
    displaySearchResults(filteredBooks);
});

function displaySearchResults(results) {
    searchResults.innerHTML = "";
    results.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}`;
        searchResults.appendChild(li);
    });
}
