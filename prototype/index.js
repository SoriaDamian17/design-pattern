import Animal from "./prototype";

console.log(Animal.prototype);
/** Output
construct: ƒ construct(name, fierce)
constructor: class Animal
fierce: (...)
name: (...)
toString: ƒ toString()
get fierce: ƒ fierce()
get name: ƒ name()
__proto__: Object
*/

// new Objet with prototype
const Dog = Object.create(Animal);
console.log(Dog);
/** Output
Function {}
arguments: (...)
caller: (...)
__proto__: class Animal
	arguments: (...)
	caller: (...)
	length: 0
	name: "Animal"
	prototype: {constructor: ƒ, construct: ƒ, toString: ƒ}
	__proto__: ƒ ()
	[[FunctionLocation]]: pen.js:2
	[[Scopes]]: Scopes[2]
*/
