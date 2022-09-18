const qsortMiddlePivot = (list = []) => {
  if (list.length < 2) return list;
  const pivotIdx = ~~(list.length / 2);
  const pivot = list[pivotIdx];
  let less = [], greater = [];
  for (let i = 0; i < list.length; i++) {
  	 if (i === pivotIdx) {
  	 	 continue;
  	 }
  	 if (list[i] <= pivot) {
  	 	 less.push(list[i]);
  	 } else {
  	 	 greater.push(list[i]);
  	 }
  }
  return [...qsortMiddlePivot(less), pivot, ...qsortMiddlePivot(greater)];
}

export default function test() {
  console.log(qsortMiddlePivot([]))
  console.log(qsortMiddlePivot([3]));

  console.time('quicksort middle pivot');
  console.log(qsortMiddlePivot([5,8,3,7,9,6,1,4,2]));
  console.timeEnd('quicksort middle pivot');

  console.time('quicksort middle pivot 2');
  console.log(qsortMiddlePivot([1,2,3,4,5,6,7,8,9]));
  console.timeEnd('quicksort middle pivot 2');
}
