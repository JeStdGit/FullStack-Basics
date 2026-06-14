// 10,000 -> 25%
// 20,000 -> 30%
// 25,000 -> 35%
// 30,000 -> 40%

function calcNetSalary(salary) {
  let tax = 0;

  switch (true) {
    case salary >= 30000:
      tax = 0.4;
      break;
    case salary >= 25000:
      tax = 0.35;
      break;
    case salary >= 20000:
      tax = 0.3;
      break;
    case salary >= 10000:
      tax = 0.25;
      break;
    default:
      tax = 0.01;
  }

  return salary * (1 - tax);
}

console.log(calcNetSalary(10000));
console.log(calcNetSalary(15000));
console.log(calcNetSalary(20000));
console.log(calcNetSalary(22500));
console.log(calcNetSalary(25000));
console.log(calcNetSalary(27500));
console.log(calcNetSalary(30000));
console.log(calcNetSalary(35000));

let previousSalary = 0;
let previousNet = 0;
for (let i = 5000; i < 100000; i++) {
  let currentSalary = calcNetSalary(i);
  if (currentSalary < previousSalary) {
    console.log("current salary:", i, "net:", currentSalary);
    console.log("previous salary:", previousSalary, "net:", previousNet);
    break;
  }
  previousSalary = i;
  previousNet = currentSalary;
}
