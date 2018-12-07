/*
Write a function called loginProtect
This function will take 3 arguments
1. A username
2. A password
3. A function that will take two arguments
Your function should return a closure that when invoked 
with the correct username and password will invoke your third argument
with the 3rd and 4th argument that are passed to your closure 
Use the tests to guide your solution
*/

const loginProtect = function (user, password, func) {

    return function (string1, string2, arg3, arg4) {
      if (string1 === user && string2 === password) {
      	return func(arg3, arg4);
      }
    
	}
}

// const add = (a, b) => a + b
// const protectedLogin = loginProtect('foo', 'bar', add)
// const firstTry = protectedLogin('foo', 'baaaa', 1, 2)
// const secondTry = protectedLogin('foooool', 'baaser', 2, 4)
// const thirdTryIsTheCharm = protectedLogin('foo', 'bar', 1, 2)

module.exports = loginProtect
