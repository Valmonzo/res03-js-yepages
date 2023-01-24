import { Book } from './classes/Book.js';
import { User } from './classes/User.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(e) {

    let newUserManager = new UserManager([]);
    newUserManager.load();
    newUserManager.displayStorage();

    let deleteTrash = document.querySelectorAll(".delete-user");
    console.log(deleteTrash);

    for (let i = 0; i < deleteTrash.length; i++) {
        deleteTrash[i].addEventListener("click", function(event) {
            newUserManager.deleteUser(parseInt(deleteTrash[i].id));
            newUserManager.save();
            newUserManager.load();
            window.location.reload();
        });
    }

});
