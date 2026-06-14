const people = [
    { id: 1, name: "Shimi", isSingle: true },
    { id: 2, name: "Danny", isSingle: true },
    { id: 3, name: "Gaby", isSingle: false },
]

const areAllSingles = people.every(obj => obj.isSingle)
const areThereMarried = people.some(obj => !obj.isSingle)

console.log("are all singles?", areAllSingles);
console.log("is there married?", areThereMarried);
console.log("is there a 'Shimi?'", people.some(obj => obj.name == "Shimi"));

const numbers = [1, 2, 3]
console.log(numbers.some(num => num == 3));

const singles = people.filter(obj => obj.isSingle)
console.log("singles", singles);
console.log("all people", people);

const hasY = people.find(obj => obj.name.includes('y'))
console.log("hasY:", hasY);
