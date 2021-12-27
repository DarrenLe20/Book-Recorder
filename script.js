let myLibrary = [];
const mid = document.querySelector('.mid');
const shelf = document.querySelector('.shelf');
const submit = document.querySelector('.Submit');
submit.addEventListener('click', () => {
    let name = document.getElementById('NAME').value; 
    let name2 = document.getElementById('NAME2').value; 
    addBookToLibrary(name, name2);
    document.querySelector('.bg-modal').style.display = 'none';
})

// Constructor
function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToShelf(a) {
    // Add book to array
    myLibrary.push(a);
    // Create the card
    let book = document.createElement('div');
    book.classList.add('card');
    // Create title
    let title = document.createElement('p');
    title.textContent = a.title;
    // Create author
    let author = document.createElement('p');
    author.textContent = a.author;
    // Create function session
    let bookFunctions = document.createElement('div');
    bookFunctions.classList.add('bookFunctions');
    // Create status toggle button
    let btn = document.createElement('button');
    btn.textContent = 'Read';
    btn.classList.add('status');
    btn.addEventListener('click', () =>{
        if (btn.textContent === 'Read') {
            btn.textContent = 'Not Read';
        } else {
            btn.textContent = 'Read';
        }
    })
    // Create delete button
    let btn2 = document.createElement('button');
    btn2.textContent = 'Delete';
    btn2.classList.add('delete');
    btn2.addEventListener('click', () => {
        book.remove();
    })
    // Add content to the book and add the book to the shelf
    shelf.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(bookFunctions);
    bookFunctions.appendChild(btn);
    bookFunctions.appendChild(btn2);
}
/*
function addBookToLibrary() {
    newBook.addEventListener('click', () => {
        setTimeout(function() {
            let name = prompt('Enter the title of the book' + 
            "\nOr press Esc to exit.");
            let name2 = prompt('Enter the name of the author' +
            '\nOr press Esc to exit.');
            if (name === null || name2 === null || name == "" || name2 == ""){
                console.log("Invalid Input");
                return;
            } else {
                let userBook = new Book(name, name2);
                addBookToShelf(userBook);
            }
        }, 100)   
    })
}
*/

function addBookToLibrary(name, name2) {
    if (name === null || name2 === null || name == "" || name2 == ""){
        console.log("Invalid Input");
        return;
    } else {
        let userBook = new Book(name, name2);
        addBookToShelf(userBook);
    }
}

document.getElementById('open').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
})


// FUNCITONS FOR TESTING
function toggleStatus() {
    const statuses = document.querySelectorAll('.status');
    statuses.forEach(status => status.addEventListener('click', () => {
        if (status.textContent === 'Read') {
            status.textContent = 'Not Read';
        } else {
            status.textContent = 'Read';
        }
    }))
}
toggleStatus();



