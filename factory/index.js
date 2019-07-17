import PizzaFactory from './PizzaFactory';

const pizza = new PizzaFactory();

const suprema = pizza.createPizza('Suprema');
console.log(suprema);

const vegetarian = pizza.createPizza('Vegetarian');
console.log(vegetarian);
