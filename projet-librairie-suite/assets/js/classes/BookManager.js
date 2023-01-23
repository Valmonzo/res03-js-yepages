class BookManager {
    #books;

    constructor(books) {
        this.#books = [];
    }

    get books() {
        return this.#books;
    }

    set books(books) {
        this.#books = books;
    }

    findAllBooks() {
        return this.#books;
    }

    findBookById(id) {
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].id === id) {
                return this.#books[i];
            }
            else {
                return null;
            }
        }
    }

    findBooksByTitle(title) {

        let booksTitle = [];
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].title === title) {
                return booksTitle.push(this.#books[i]);
            }
            else {
                return null;
            }
        }

    }

    findBooksByAuthor(author) {
        booksAuthor = [];
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].author === author) {
                return booksAuthor.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }

    findBooksByPublicationsYear(year) {
        booksYear = [];
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].publicationDate === year) {
                return booksYear.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }

    createBook(book) {
        this.#books.push(book);
    }

    deleteBook(bookId) {
        newBooksTab =[];
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].id !== bookId) {
                newBooksTab.push(this.#books[i]);
            }

            this.#books = newBooksTab;
        }
    }


    editBook(book) {
        for(let i = 0; i< this.#books; i++) {
            if(this.#books[i].id === book.id) {
                this.#books[i] = book;
            }
        }
    };



    save(){

        let stringBooks = JSON.stringify(this.#books);
        sessionStorage.setItem("thisBooks", stringBooks);

    }

    load() {


        let  parseBooks = JSON.parse(sessionStorage.getItem("thisBooks"));
        for (let i = 0; i < parseBooks.length; i++) {
        let parseData = JSON.parse(parseBooks[i]);
        let newBook = new Book(parseData.id, parseData.title, parseData.author, parseData.publicationDate, parseData.totalPages, parseData.excerpt, parseData.coverImage);
        this.#books.push(newBook);
    }
    }
}

export { BookManager };