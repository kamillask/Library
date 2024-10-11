const myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");

const displayBooksButton = document.querySelector("#display");
const addBookButton = document.querySelector("#add");
const addBookDialogButton = document.querySelector("#addBookDialog");

const cancelDialog = document.querySelector("#cancel");
const submitDialog = document.querySelector("#submitDialog");

let nameInput = document.querySelector("#bookName");
let authorInput = document.querySelector("#bookAuthor");
let pageInput = document.querySelector("#bookPages");

let index = 0;


function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

const harryPotter = new Book("Azkaban", "JK Rowling", 347);
const help = new Book("Atomic Habits", "Some Guy", 677);
const whateverBook = new Book("48 Laws of Power", "Another Guy", 1010);
const harryPotter1 = new Book("Azkaban", "JK Rowling", 347);
const help1 = new Book("Atomic Habits", "Some Guy", 677);
const whateverBook1 = new Book("48 Laws of Power", "Another Guy", 1010);

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(harryPotter);
addBookToLibrary(help);
addBookToLibrary(whateverBook);
addBookToLibrary(harryPotter1);
addBookToLibrary(help1);
addBookToLibrary(whateverBook1);

console.log(myLibrary);

function displayBooks(){
    for(let book in myLibrary){
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard");
        bookCard.setAttribute("id", index);
        index++;

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", "removeButton");
        removeButton.addEventListener("click", () => {
            alert("clicked");
            bookCard.remove();
        })

        const bookControls = document.createElement("div");
        bookControls.setAttribute("class", "bookControls");

        const removeButtonIcon = document.createElement("img");
        removeButtonIcon.setAttribute("src", "./images/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png")
        removeButton.appendChild(removeButtonIcon);

        const markReadButton = document.createElement("button");
        markReadButton.setAttribute("id", "markRead");
        const markReadButtonIcon = document.createElement("img");
        markReadButtonIcon.setAttribute("src", "./images/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
        markReadButton.appendChild(markReadButtonIcon);

        bookControls.appendChild(removeButton);
        bookControls.appendChild(markReadButton);

        const bookName = document.createElement("div");
        bookName.textContent = myLibrary[book].name;
        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = myLibrary[book].author;
        const bookPages = document.createElement("p");
        bookPages.textContent = "Pages: " + myLibrary[book].pages;
        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);

        bookCard.appendChild(bookControls);
        bookContainer.appendChild(bookCard);
    }
}
displayBooks();

function displayBook(book){
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "bookCard");
    bookCard.setAttribute("id", index);
    index++;

    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton");
    removeButton.addEventListener("click", () => {
        alert("clicked");
        bookCard.remove();
    })

    const bookControls = document.createElement("div");
    bookControls.setAttribute("class", "bookControls");

    const removeButtonIcon = document.createElement("img");
    removeButtonIcon.setAttribute("src", "./images/close_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png")
    removeButton.appendChild(removeButtonIcon);

    const markReadButton = document.createElement("button");
    markReadButton.setAttribute("id", "markRead");
    const markReadButtonIcon = document.createElement("img");
    markReadButtonIcon.setAttribute("src", "./images/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
    markReadButton.appendChild(markReadButtonIcon);

    bookControls.appendChild(removeButton);
    bookControls.appendChild(markReadButton);

    const bookName = document.createElement("div");
    bookName.textContent = book.name;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    const bookPages = document.createElement("p");
    bookPages.textContent = "Pages: " + book.pages;
    bookCard.appendChild(bookName);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookControls);
    bookContainer.appendChild(bookCard);
}

// displayBooksButton.addEventListener("click", () => {
//     displayBooks();
// });

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
    const bookInput = new Book(nameInput.value, authorInput.value, pageInput.value);
    addBookToLibrary(bookInput);
    displayBook(bookInput);
    console.log(myLibrary);
    addBookDialogButton.close();
    preventDefault();
});


//DOPESNT WORK BECAUSE OF QUERYSELCTORALL, NEED TO ITERATE THROUGH NODELIST
// removeBookButton.addEventListener("click", () => {
//     alert("clicked");
// });


