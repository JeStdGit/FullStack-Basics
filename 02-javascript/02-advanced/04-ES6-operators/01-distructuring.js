const colors = ["red", "green", "blue"]

let r = colors[0]
let g = colors[1]
let b = colors[2]

console.log(r, g, b);

[r, g, b, y] = colors

console.log(r, g, b, y);

const person = {
    name: "Pinni",
    gender: "Male"
}

const name = person["name"]
const gender = person.gender

const { name: newName, gender: newGender } = person

console.log(newName, newGender);
