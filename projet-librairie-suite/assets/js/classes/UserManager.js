import { User } from './User.js'

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

    createUser(user) {
        let state = false;
        let confirmpassword = document.getElementById("new-pass-confirm").value;

        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].email === user.email) {
                state = true
            }

        };

        if (state === false) {

            if (user.password !== "" && user.password === confirmpassword) {
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
        let removeTab = [];
        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id !== userId) {
                removeTab.push(this.#users[i])
            }
        }

        this.#users = removeTab;
        console.log(this.#users);
    }

    editUser(user){

        for(let i = 0; i< this.#users.length; i++) {
            if(this.#users[i].id === user.id) {
                this.#users[i].username = user.username;
                this.#users[i].email = user.email;
                this.#users[i].firstName = user.firstName;
                this.#users[i].lastName = user.lastName;
                this.#users[i].profileImage = user.profileImage;


            }
        }
    }

    save(){
        let stringUsers = JSON.stringify(this.#users);
        localStorage.setItem("thisUsers", stringUsers);
    }


    load() {
        let  parseUsers = JSON.parse(localStorage.getItem("thisUsers"));
        for (let i = 0; i < parseUsers.length; i++) {
            let parseData = JSON.parse(parseUsers[i]);
            let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
            this.#users.push(newUser);
        }

    }

    displayStorage() {

        for(let i = 0; i < this.#users.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let tbody = document.getElementById("tbody-user");
            let button = document.createElement("button");
            let span = document.createElement("span");
            let span2 = document.createElement("span");


            span.setAttribute("class", "bi-trash3");
            span2.setAttribute("class", "bi-pen");
            span2.setAttribute("id", this.#users[i].id);
            button.setAttribute("id", this.#users[i].id);
            button.setAttribute("class", "delete-user");


            button.appendChild(span);

            td1.textContent = this.#users[i].id;
            td2.textContent = this.#users[i].username;
            td3.textContent = this.#users[i].email;
            td4.textContent = this.#users[i].firstName;
            td5.textContent = this.#users[i].lastName;

            td6.appendChild(button);
            td7.appendChild(span2)

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);

            tbody.appendChild(tr);

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