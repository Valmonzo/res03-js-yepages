class User {
    #id;
    #username;
    #email;
    #password;
    #firstName;
    #lastName;
    #profileImage;


    constructor(id, username, email, password, firstName, lastName, profileImage) {
        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#profileImage = profileImage;
    }

    get id() {
        return this.#id;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get profileImage() {
        return this.#profileImage;
    }

    set id(id) {
        this.#id = id;
    }

    set username(username) {
        this.#username = username;
    }

    set email(email) {
        this.#email = email;
    }

    set password(password) {
        this.#password = password;
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }

    set profileImage(profileImage) {
        this.#profileImage = profileImage;
    }

    toJSON() {

        let user = {
            id : this.#id,
            username: this.#username,
            email : this.#email,
            password : this.#password,
            firstName : this.#firstName,
            lastName : this.#lastName,
            profileImage : this.#profileImage
        };

        return JSON.stringify(user);

    }
}

export { User };
