const sum = (numbers: Array<number>): number => {
  if (!numbers.length) return 0;
  else return numbers.pop() + sum(numbers);
}

const count = (numbers: Array<number>): number => {
  if (!numbers.length) return 0;
  else {
    numbers.shift();
    return 1 + count(numbers);
  }
}

const max = (numbers: Array<number>): number => {
  if (!numbers.length) return 0;
  else {
    const head: number = numbers.shift();
    const subMax: number = max(numbers);
    return head > subMax ? head : subMax;
  }
}

export default function test() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sum([...numbers]));
  console.log(count([...numbers]));
  console.log(max([...numbers]));
}
