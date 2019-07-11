import Singleton from './singleton';

const Persona1 = new Singleton();
const Persona2 = new Singleton();

console.log('New Singleton()', Persona1 === Persona2);

const Persona3 = Singleton.getInstance();
const Persona4 = Singleton.getInstance();

console.log('Singleton.getInstance()', Persona3 === Persona4);
