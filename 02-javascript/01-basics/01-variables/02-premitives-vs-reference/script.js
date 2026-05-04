let a = 10;
let b = a;
b = b + 1;
console.log("a:", a);
console.log("b:", b);

const obj = {
  name: "Jacob",
  age: 26,
  isMarried: true,
};

const personAge = obj.age;
console.log(personAge);

const personName = obj.name;
console.log(personName);

const blaBlaBla = "name";
console.log(obj[blaBlaBla]);

const obj1 = obj;

obj1.address = "Totzeret Aharetz";
obj["id"] = "212818991"

console.log("obj:", obj);
console.log("obj1", obj1);
