console.log("testing es6 run properly");
// this is a class and its give value for method
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }
}


class Display {
    add(book) {
        let tableBody = document.getElementById("tableBody");
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                             <td>${book.type}</td>
                            </tr>`
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = getElementById("libraryForm");
        libraryForm.reset();
    }


    // to use validation form
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {

        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message !</strong>${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`

        setTimeout(() => {
            message.innerHTML = '';
        }, 3000)
    }

}


let libraryForm = document.getElementById("libraryForm");
// Add Submit evnt listener to libraryForm.
libraryForm.addEventListener('submit', libraryFormSubmit);

// use form to perform new build book
function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    // console.log("check run this function");
    let author = document.getElementById('author').value;
    
    let type;
    let fiction = document.getElementById('fiction');
    // to get id for radio button
    let programing = document.getElementById('programing');
    let problemSolve = document.getElementById('problemSolve');
    
    
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (problemSolve.checked) {
        type = problemSolve.value;
    }
    
    let book = new Book(name, author, type);
    console.log(book)
    
    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        libraryForm.reset();
        display.show('success',' your book has been successfully addedd');
    }
    else{
        display.show('danger',' sorry you can not add this book');
    }
    
    
    // display.clear();
    e.preventDefault();


}   