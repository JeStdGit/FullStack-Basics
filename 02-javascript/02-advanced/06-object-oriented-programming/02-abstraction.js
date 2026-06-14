class CoffeeMachine {
    #waterLevel = 0
    #temperature = 0

    constructor(coffeeType, milkType, cops) {
        this.coffeeType = coffeeType
        this.milkType = milkType
        this.cops = cops
    }

    #heatWhater() {
        this.#temperature = 90
        console.log("Heating Whater");

    }

    #pourWhater() {
        this.#waterLevel = 5
        console.log(`The whater level is ${this.#waterLevel} and temperature is ${this.#temperature}`);
    }

    #fillWhater() {
        this.#waterLevel = 5
        console.log("Whater filled to level ${this.whaterLevel");
    }

    makeCoffee() {
        if (this.#waterLevel < 2) this.#fillWhater()
        if (this.#temperature < 90) this.#heatWhater()

        this.#pourWhater()
    }

}