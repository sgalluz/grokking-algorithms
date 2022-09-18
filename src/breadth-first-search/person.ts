// type Gender = 'M' | 'F';

export class Person {

   private _id: string;
   private _name: string;
   private _gender: string;
   private _friends: Array<string> = [];

	 constructor(name: string) {
	 	 this._id = name.toLowerCase();
	 	 this._name = name;
	 }

   get id(): string {
     return this._id;
   }

   get name(): string {
     return this._name;
   }

	 set gender(gender: string) {
	 	 this._gender = gender ?? 'M';
	 }

   get gender(): string {
	 	 return this._gender;
	 }

	 set friends(people: Array<string>) {
	 	 this._friends = people;
	 }

   get friends(): Array<string> {
	 	 return this._friends;
	 }

	 isFemale(): boolean {
	 	 return this._gender === 'F';
	 }
}
