let myLibrary = [];
const bookContainer = document.querySelector(".bookContainer");

const displayBooksButton = document.querySelector("#display");
const addBookButton = document.querySelector("#add");
const addBookDialogButton = document.querySelector("#addBookDialog");

const cancelDialog = document.querySelector("#cancel");
const submitDialog = document.querySelector("#submitDialog");

let nameInput = document.querySelector("#bookName");
let authorInput = document.querySelector("#bookAuthor");
let pageInput = document.querySelector("#bookPages");

// let index = 0;


function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

Book.prototype.isRead = function() {
    if(this.read===false){
        this.read = true;
        return true;
    } else{
        this.read = false;
        return false;
    }
}

let donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 863);
let aTaleofTwoCities = new Book("A Tale of Two Cities", "Charles Dickens", 448);
let theLordoftheRings = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178);
let theLittlePrince = new Book("The Little Prince", "Antoine de Saint-Exupéry", 96);
let harryPotterandthePhilosophersStone = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223);
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310);

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBookToLibrary(donQuixote);
addBookToLibrary(aTaleofTwoCities);
addBookToLibrary(theLordoftheRings);
addBookToLibrary(theLittlePrince);
addBookToLibrary(harryPotterandthePhilosophersStone);
addBookToLibrary(theHobbit);

console.log(myLibrary);

function displayBooks(){
    for(let book in myLibrary){
        const bookCard = document.createElement("div");
        bookCard.setAttribute("class", "bookCard");
        // bookCard.setAttribute("id", index);
        // index++;
        bookCard.setAttribute("id", "notRead");

        const removeButton = document.createElement("button");
        removeButton.setAttribute("id", "removeButton");
        removeButton.setAttribute("title", "Remove Book");

        removeButton.addEventListener("click", () => {
            bookCard.remove();
        });

        const bookControls = document.createElement("div");
        bookControls.setAttribute("class", "bookControls");

        const removeButtonIcon = document.createElement("img");
        removeButtonIcon.setAttribute("src", "./images/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png")
        removeButton.appendChild(removeButtonIcon);

        const markReadButton = document.createElement("button");
        markReadButton.setAttribute("id", "markRead");
        markReadButton.setAttribute("title", "Mark as read");
        const markReadButtonIcon = document.createElement("img");
        markReadButtonIcon.setAttribute("src", "./images/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
        markReadButton.appendChild(markReadButtonIcon);

        markReadButton.addEventListener("click", () => {
            myLibrary[book].isRead();
            console.log(myLibrary[book]);
            if(myLibrary[book].read===true){
                bookCard.setAttribute("id", "read");
            } else{
                bookCard.setAttribute("id", "notRead");
            }
        });

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
    // bookCard.setAttribute("id", index);
    // index++;
    bookCard.setAttribute("id", "notRead");

    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton");
    removeButton.setAttribute("title", "Remove Book");
    removeButton.addEventListener("click", () => {
        bookCard.remove();
    })

    const bookControls = document.createElement("div");
    bookControls.setAttribute("class", "bookControls");

    const removeButtonIcon = document.createElement("img");
    removeButtonIcon.setAttribute("src", "./images/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png")
    removeButton.appendChild(removeButtonIcon);

    const markReadButton = document.createElement("button");
    markReadButton.setAttribute("id", "markRead");
    markReadButton.setAttribute("title", "Mark as read");
    const markReadButtonIcon = document.createElement("img");
    markReadButtonIcon.setAttribute("src", "./images/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png");
    markReadButton.appendChild(markReadButtonIcon);

    markReadButton.addEventListener("click", () => {
        book.isRead();
        if(book.read===true){
            bookCard.setAttribute("id", "read");
        } else{
            bookCard.setAttribute("id", "notRead");
        }
    });

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

function clearValues(){
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
}

addBookButton.addEventListener("click", () => {
    addBookDialogButton.showModal();
});

cancelDialog.addEventListener("click", () => {
    clearValues();
    addBookDialogButton.close();
});

submitDialog.addEventListener("click", () => {
    if(nameInput.value!="" && authorInput.value!="" && pageInput.value!=""){
        let bookInput = new Book(nameInput.value, authorInput.value, pageInput.value);
        addBookToLibrary(bookInput);
        displayBook(bookInput);
        console.log(myLibrary);
        clearValues();
        addBookDialogButton.close();
    } else{
        alert("Please fill in the required fields.");
    }
    
    // preventDefault();
});


