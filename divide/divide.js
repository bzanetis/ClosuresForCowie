/*
Create a divide function using closures
Then create three functions divide10, divide20, divide5
the divide function will take one argument that it will divide the closure
*/

const divide = function (num) {
  // insert function definition here
  return function(x) {
  	return x / num;
  }
}

// replace null with the correct assignment to the variable
const divide5 = divide(5)
const divide10 = divide(10)
const divide20 = divide(20)

module.exports = {
  divide,
  divide5,
  divide10,
  divide20
}

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

//console.log(add5(2)) // 7
//cosnole.log(add10(2)) //12