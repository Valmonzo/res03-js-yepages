import { User } from './classes/User.js';
import { UserManager } from './classes/UserManager.js';


window.addEventListener("DOMContentLoaded", function(e) {
    let newUserManager = new UserManager([]);
    newUserManager.load();
    let newUser = new User();
    newUser.loadUser();
    newUser.displayUser();

});