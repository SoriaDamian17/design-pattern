import { Suprema, Vegetarian } from './pizza';

class PizzaFactory {

    createPizza(type) {

        switch (type) {
            case 'Suprema':
                return new Suprema();
            case 'Vegetarian':
                return new Vegetarian();
            default:
                return new Suprema();
        }
    }
}

export default PizzaFactory;