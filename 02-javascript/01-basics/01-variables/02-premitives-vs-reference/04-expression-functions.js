
function print() {
    console.log("Hello world (from print)");
    return function () {
        console.log("Hello function");
    }
}

// print()

print1 = function () {
    console.log("Hello Expression");
}

print1()

const copyPrint = print

copyPrint()

// decleration

function father(num1, num2) {
    const sum = num1 + num2
    return function () {
        console.log(`The result is ${sum}`);
    }
}

const newNum = father(1, 7)

const newNumFun = father

newNum()
const newFun = newNumFun(8, 7)
newFun()