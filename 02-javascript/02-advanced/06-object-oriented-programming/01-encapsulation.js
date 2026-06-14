let name = "yossi"
let age = 56
let address = "Rakefet 90, TLV"

const person = {
    name: "yossi",
    age: 56,
    address: "Rakefet 90, TLV"
}

class Person {
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }

    log() {
        console.log(this)
    }
}

const employee = new Person("yossi", 62, "JLM")

employee.log()