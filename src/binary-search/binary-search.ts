const binarySearch = (nums: number[], target: number): number => {
  let low: number = 0;
  let high: number = nums.length - 1;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
}

const binarySearchRecursive = (list: number[], target: number): number => {
    const pivot = Math.floor((list.length - 1) / 2);

    if (target === list[pivot]) return pivot;
    if (list.length === 1) return (list[pivot] > target) ? ~0 : ~1;
    if (target < list[pivot]) return binarySearchRecursive(list.slice(0, pivot), target)

    return pivot + 1 + binarySearchRecursive(list.slice(pivot + 1), target);
};

export default function test(): void {
  // execute binary search
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  console.log('# LIST1 ###################################');
  console.log(binarySearch(list, 5));
  console.log(binarySearch(list, 3));
  console.log(binarySearch(list, 6));
  console.log(binarySearch(list, -1));
  console.log('* LIST2 ***********************************');
  console.log(binarySearch(list2, 3));
  console.log(binarySearch(list2, 13));

  console.log('# LIST1 - RECURSIVE #######################');
  console.log(binarySearchRecursive(list, 5));
  console.log(binarySearchRecursive(list, 3));
  console.log(binarySearchRecursive(list, 6));
  console.log(binarySearchRecursive(list, -1));
  console.log('* LIST2 - RECURSIVE ***********************');
  console.log(binarySearchRecursive(list2, 3));
  console.log(binarySearchRecursive(list2, 13));
}
