import PersonBuilder from "./builder";

const Persona1 = new PersonBuilder()
								.setName('Megaman')
								.setLastname("x6")
								.setPhone('01010101010101')
								.setEmail('megaman@robot.com')
								.build();

console.log('Persona1', Persona1);

const Persona2 = new PersonBuilder()
								.setName('Zero')
								.setLastname("x6")
								.setPhone('01010101010101')
								.setEmail('zero@robot.com')
								.build();

console.log('Persona2', Persona2);