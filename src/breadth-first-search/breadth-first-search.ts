import { PersonBuilder } from './person.builder';

function BFS(graph = {}) {
	 let queue = graph['me'].friends;
	 let searched = [];
	 while (queue.length) {
	 	 const id = queue.shift();
	 	 if (!searched.includes(id)) {
	 	 	  const curr = graph[id];
	 	 	  if (curr.isFemale()) {
	 	 	  	  return curr;
	 	 	  } else if (curr.friends) {
	 	 	  	  queue.push(...curr.friends);
	 	 	  }
	 	 	  searched.push(id);
	 	 }
	 }
  return null;
}


function createPeople() {
	 // 2nd level
	 const jim = new PersonBuilder('Jim')
	     .gender('M')
	     .build();
	 const john = new PersonBuilder('John')
	     .gender('M')
	     .build();
	 const tim = new PersonBuilder('Tim')
	     .gender('M')
	     .build();
	 const jane = new PersonBuilder('Jane')
	     .gender('F')
	     .build();

	 // 1st level
  const jake = new PersonBuilder('Jake')
	     .gender('M')
	     .friends([tim.id, jim.id])
	     .build();
	 const al = new PersonBuilder('Al')
	     .gender('M')
	     .friends([john.id])
	     .build();
	 const bob = new PersonBuilder('Bob')
	     .gender('M')
	     .friends([tim.id, jane.id])
	     .build();

	 // root
  const me = new PersonBuilder('Me')
	     .gender('M')
	     .friends([jake.id, al.id, bob.id])
	     .build();

	 return {
	 	 jim, john, tim, jane, jake, al, bob, me
	 };
}

export default function test(): void {
	const people = createPeople();
	console.log(BFS(people));
}
