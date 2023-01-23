class UserManager {
    #users;

    constructor(users) {
        this.#users = users;
    };

    get users() {
        return this.#users;
    }

    set users(users) {
        this.#users = users;
    }

    findAllUsers(){
        return this.#users;
    }

    findUserById(id){
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id === id) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    findUserByUsername(username) {
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].username === username) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    findUserByEmail(email){
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].email === email) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    createUser(user){
        let state= 0;
        let confirmpassword = document.getElementById("new-pass-confirm").value;
        for(let i = 0; i < this.#users.length; i++) {
            if(this.#users[i].email === user.email) {
                state = 1
            }

        }
        if(state === 0) {
            
            if(user.password !== "" && user.password === confirmpassword) {
                this.#users.push(user);
            }
            else {
                alert("Les mots de passe sont différents");
            }

        }
        else {
                alert(`Désolé ${user.email} est déja utilisé !`);
            }

    }

    deleteUser(userId){

        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id === userId) {
                this.#users.remove(users[i]);
            }
        }
    }

    editUser(user){
        newUserTab = [];
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id !== user.id) {
                newUserTab.push(this.#users[i]);
            }

            this.#users = newUserTab;
        }
    }

    save(){
        let stringUsers = JSON.stringify(this.#users);
        sessionStorage.setItem("thisUsers", stringUsers);
    }

    load() {
        let  parseUsers = JSON.parse(sessionStorage.getItem("thisUsers"));
        for (let i = 0; i < parseUsers.length; i++) {
            let parseData = JSON.parse(parseUsers[i]);
            let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
            this.#users.push(newUser);
        }
    }

    login(email, password) {
        if(this.#users.length > 0) {
            for(let i = 0; i< this.#users.length; i++) {
                if(email === this.#users[i].email && password === this.#users[i].password) {
                    alert(`Hello ${this.#users[i].username} !`);
                    break;
                }

                alert("Ces identifiants de connexion n'éxistent pas !");
                    console.log("inexistant");
            }
        }
        else {
            alert("Ces identifiants de connexion n'éxistent pas !");
                    console.log("inexistant");
        }
    }

}

export { UserManager };