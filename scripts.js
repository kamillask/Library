const myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");

const displayBooksButton = document.querySelector("#display");
const addBookButton = document.querySelector("#add");
const addBookDialogButton = document.querySelector("#addBookDialog");

const cancelDialog = document.querySelector("#cancel");
const submitDialog = document.querySelector("#submitDialog");

const nameInput = document.querySelector("#bookName");
const authorInput = document.querySelector("#bookAuthor");
const pageInput = document.querySelector("#bookPages");


function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

const harryPotter = new Book("Azkaban", "JK Rowling", 347);
const help = new Book("Atomic Habits", "Some Guy", 677);
const whateverBook = new Book("48 Laws of Power", "Another Guy", 1010);

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(harryPotter);
addBookToLibrary(help);
addBookToLibrary(whateverBook);

console.log(myLibrary);

function displayBooks(){
    for(let book in myLibrary){
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard");
        // bookCard.setAttribute("id", myLibrary[book].name);
        const bookName = document.createElement("div");
        bookName.textContent = myLibrary[book].name;
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = myLibrary[book].author;
        const bookPages = document.createElement("p");
        bookPages.textContent = "Pages: " + myLibrary[book].pages;
        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookContainer.appendChild(bookCard);
    }
}

displayBooksButton.addEventListener("click", () => {
    displayBooks();
});

// addBookButton.addEventListener("click", () => {
//     let nameInput = prompt("Enter a title:");
//     let authorInput = prompt("Enter an author:");
//     let pageInput = prompt("Enter a page count:");
//     const newBook = new Book(nameInput, authorInput, pageInput);
//     addBookToLibrary(newBook);
//     console.log(newBook);
// });

addBookButton.addEventListener("click", () => {
    addBookDialogButton.showModal();
});

cancelDialog.addEventListener("click", () => {
    addBookDialogButton.close();
});

submitDialog.addEventListener("click", () => {

    addBookDialogButton.close();
});