const myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");
const displayBooksButton = document.querySelector("#display");



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
        alert(book.name);
        const bookCard = document.createElement("div");
        const bookName = document.createElement("div");
        bookName.textContent = book.name;
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = book.author;
        const bookPages = document.createElement("p");
        bookPages.textContent = book.pages;
        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookContainer.appendChild(bookCard);
    }
}

displayBooksButton.addEventListener("click", () => {
    displayBooks();
});