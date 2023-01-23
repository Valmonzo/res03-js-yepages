class Book{
    #id;
    #title;
    #author;
    #publicationDate;
    #totalPages;
    #excerpt;
    #coverImage;


    constructor(id, title, author, publicationDate, totalPages, excerpt, coverImage) {
        this.#id = id;
        this.#title = title;
        this.#author = author;
        this.#publicationDate = publicationDate;
        this.#totalPages = totalPages;
        this.#excerpt = excerpt;
        this.#coverImage = coverImage;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get publicationDate() {
        return this.#publicationDate;
    }

    get totalPages() {
        return this.#totalPages;
    }

    get excerpt() {
        return this.#excerpt;
    }

    get coverImage() {
        return this.#coverImage;
    }

    set id(id) {
        this.#id = id;
    }

    set title(title) {
       this.#title =title;
    }

    set author(author) {
        this.#author =author;
    }

    set publicationDate(publicationDate) {
        this.#publicationDate = publicationDate;
    }

    set totalPages(totalPages) {
        this.#totalPages = totalPages;
    }

    set excerpt(excerpt) {
        this.#excerpt = excerpt;
    }

    set coverImage(coverImage) {
        this.#coverImage = coverImage;
    }

    toJSON() {

        let book = {
            id : this.#id,
            title: this.#title,
            author : this.#author,
            publicationDate : this.#publicationDate,
            totalPages : this.#totalPages,
            excerpt : this.#excerpt,
            coverImage : this.#coverImage
        };

        return JSON.stringify(book);

    }
}

export { Book };