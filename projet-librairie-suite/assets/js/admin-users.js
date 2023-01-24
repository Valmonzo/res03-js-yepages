import { Book } from './classes/Book.js';
import { User } from './classes/User.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(e) {

    let newUserManager = new UserManager([]);
    newUserManager.load();
    newUserManager.displayStorage();



    let deleteTrash = document.querySelectorAll(".delete-user");

    for (let i = 0; i < deleteTrash.length; i++) {
        deleteTrash[i].addEventListener("click", function(event) {
            newUserManager.deleteUser(parseInt(deleteTrash[i].id));
            newUserManager.save();
            newUserManager.load();
            window.location.reload();
        });
    }

    let editUser = document.querySelectorAll(".bi-pen");
    let newUserToSave = null;
    for (let i = 0; i < editUser.length; i++) {
        editUser[i].addEventListener("click", function(event) {
            console.log(editUser[i].id);
            for (let j = 0; j < newUserManager.users.length; j++) {
                console.log(newUserManager.users[j].id);
                if (parseInt(editUser[i].id) === newUserManager.users[j].id) {
                    newUserToSave = new User(newUserManager.users[j].id, newUserManager.users[j].username, newUserManager.users.email, newUserManager.users[j].password, newUserManager.users[j].firstName, newUserManager.users[j].lastName, newUserManager.users[j].profileImage);
                    newUserToSave.saveUser(newUserToSave);
                    console.log(newUserToSave);

                }

            }

            window.location.href = "https://valmontpehautpietri.sites.3wa.io/Cours/JavaScript/res03-js-yepages/projet-librairie-suite/admin-edit-users.html";


        });

    }

});
