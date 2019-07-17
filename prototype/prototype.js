class Animal {

	construct(name, fierce) {
		this._name = name;
		this._fierce = fierce;
	}

	get name() {
		return this._name;
	}

    get fierce() {
        return ` This animal is ${ this._fierce ? 'fierce' : 'tame' }`;
    }

    toString() {
        return `This is a ${ this._fierce ? 'fierce' : 'tame' } ${this._name}`;
    }

}

export default Animal;