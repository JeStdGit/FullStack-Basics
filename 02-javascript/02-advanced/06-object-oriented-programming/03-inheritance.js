const { use } = require("react")

class User {

    name
    email
    #password

    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.#password = password
    }

    login(email, password) {
        if (this.email === email && this.#password == password) {
            console.log("login success!");
        } else if (this.email != email) {
            console.log(`${email} does not exist!`);
        } else if (this.#password != password) {
            console.log("incorrect password!");
        }
    }
}

class Admin extends User {
    constructor(name, email, password, department) {
        super(name, email, password)
        this.department = department
    }

    readUser(user) {
        console.log(`${user.name} is a user and it's email is ${user.email}`);
    }

    deleteUser(user) {
        console.log(`${this.name} deleted ${user.name}`);

    }
}