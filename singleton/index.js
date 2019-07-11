import Singleton from './singleton';

const Persona1 = new Singleton();
const Persona2 = new Singleton();

console.log(Persona1 === Persona2);
//Output: true;