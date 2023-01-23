import { Book } from './classes/Book.js';
import { User } from './classes/User.js';
import { UserManager } from './classes/UserManager.js';
import { BookManager } from './classes/BookManager.js';

window.addEventListener("DOMContentLoaded", function(e) {
let newUserManager = new UserManager([]);
newUserManager.load();

})