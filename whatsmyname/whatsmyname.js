/*
Create a whatsmyname function using closures
The function will take one argument, 1. a string
whatsmyname should return a function. Use the tests to guide you
*/

const whatsmyname = function (intitalName) {

	var name = intitalName;
	return function(nameToCompare) {
		// so even after this function is returned and its parent function is resolved
        // this function will still have reference to the const 'name' because 'name' is in
        // the lexical environment (scope) within which the function was declared
		if (name === nameToCompare) {
		return true;
	  } 
	return false;
	}
 }


// here you are creating a function that is bound to the name 'dave'
const mynameisdave = whatsmyname('dave');
mynameisdave('dave');
// here you are calling that function with names to check against 'dave'


module.exports = whatsmyname
