const qsort = (list = []) => {
  if (list.length < 2) return list;
  const pivot = list.shift();
  let less = [], greater = [];
  for (const curr of list) {
  	 if (curr <= pivot) {
  	 	 less.push(curr);
  	 } else {
  	 	 greater.push(curr);
  	 }
  }
  return [...qsort(less), pivot, ...qsort(greater)];
}

export default function test() {
  console.log(qsort([]))
  console.log(qsort([3]));

  console.time('quicksort');
  console.log(qsort([5,8,3,7,9,6,1,4,2]));
  console.timeEnd('quicksort');

  console.time('quicksort 2');
  console.log(qsort([1,2,3,4,5,6,7,8,9]));
  console.timeEnd('quicksort 2');
}
