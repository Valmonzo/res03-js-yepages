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

        return user;

    }

    saveUser(user) {
        let stringUser = JSON.stringify(user);
        console.log(stringUser);
        localStorage.setItem("thisUser", stringUser);
    }

    loadUser() {
        let  parseUser = JSON.parse(localStorage.getItem("thisUser"));
        /* let parsedUsername = JSON.parse(parseUser.username);
        let parsedId = JSON.parse(parseUser.id);
        let parsedFirstName = JSON.parse(parseUser.firstName);
        let parsedLastName = JSON.parse(parseUser.lastName);
        let parsedEmail = JSON.parse(parseUser.email);
        let parsedProfileImage = JSON.parse(parseUser.profileImage); */
        console.log(parseUser);
        this.#id = parseUser.id;
        this.#username = parseUser.username;
        this.#email = parseUser.email;
        this.#password = parseUser.password;
        this.#firstName = parseUser.firstName;
        this.#lastName = parseUser.lastName;
        this.#profileImage = parseUser.profileImage;


    }

    displayUser() {
        let usernameToLoad = document.getElementById("loadedUsername");
        let firstNameToLoad = document.getElementById("loadedFirstName");
        let lastNameToLoad = document.getElementById("loadedLastName");
        let emailToLoad = document.getElementById("loadedEmail");
        let profileImageToLoad = document.getElementById("loadedProfileImage");

        usernameToLoad.textContent = this.#username;
        firstNameToLoad.textContent = this.#firstName;
        lastNameToLoad.textContent = this.#lastName;
        emailToLoad.textContent = this.#email;
        profileImageToLoad.textContent = this.#profileImage;

    }


}

export { User };
