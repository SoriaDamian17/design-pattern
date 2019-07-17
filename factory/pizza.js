class Pizza {

    constructor(ingredients, price) {
        this._ingredients = ingredients;
        this._price = price;
    }

    get ingredients() {
        return this.ingredients;
    }

    get price() {
        return this._price;
    }

}

class Suprema {

    constructor() {
        this._pizza = new Pizza(["jamon","queso","salsa","carne"],
        150);
    }

    build() {
        return this._pizza;
    }
}

class Vegetarian {

    constructor() {
        this._pizza = new Pizza(["tomate","queso","salsa"],
        150);
    }

    build() {
        return this._pizza;
    }
}

export default Suprema;
export default Vegetarian;