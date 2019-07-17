class PersonBuilder {
	
	name;
	lastname;
	phone;
	email;

	constructor() {
		this.name = undefined;
		this.lastname = undefined;
		this.phone = undefined;
		this.email = undefined;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	setLastname(lastname) {
		this.lastname = lastname;
		return this;
	}

	setPhone(phone) {
		this.phone = phone;
		return this;
	}

	setEmail(email) {
		this.email = email;
		return this;
	}

	build() {
		return {
			name: this.name,
			lastname: this.lastname,
			phone: this.phone,
			email: this.email
		}
	}
}

export default PersonBuilder;