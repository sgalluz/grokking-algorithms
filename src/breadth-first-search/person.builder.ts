import { Person } from './person';

export class PersonBuilder {
  private readonly person: Person;

	 	 constructor(name) {
	 	 this.person = new Person(name);
	 }

	 gender(g: string) {
	 	 this.person.gender = g;
	 	 return this;
	 }

	 friends(people: Array<string>) {
	 	 this.person.friends = people;
	 	 return this;
	 }

	 build() {
	 	 return this.person;
	 }
}
