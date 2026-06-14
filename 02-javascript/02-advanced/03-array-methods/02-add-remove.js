const numbers = [6, 7, 8]

numbers.push(12, 13)

console.log(numbers)

numbers.unshift(1, 2)

console.log(numbers)

const last = numbers.pop()

console.log(`${numbers}, (item removed (from the end): ${last})`);

const first = numbers.shift()

console.log(`${numbers}, (item removed (from the end): ${first})`);