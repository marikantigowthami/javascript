//function -to perform the multiple task with the single code
// code reusabily
// function add() {
//   var a = 53;
//   var b = 60;
//   document.write(a + b);
//   console.log(a + b);
// }

// add();
//ES6
// const add = () => {
//   var a = 85;
//   var b = 90;
//   document.write(a + b);
//   console.log(a + b);
// };
// add();
//ES7

// const add = (a, b) => console.log(a + b);
// add(85, 90);
//hoisting - to declare the variable to the top
// console.log(b);
// b = 45;

let name = "gowthami";

function demo() {
  let name = "gowthami";
  document.write(`Hello, my name is ${name}`);
}
document.write(`Hello, my name is ${name}`);
demo();