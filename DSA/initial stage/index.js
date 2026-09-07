//Two Sum II - Input Array Is Sorted

let inputArr = [2, 7, 11, 15];
let target = 9;

let twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // Return 1-based indices
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; // Return an empty array if no solution is found
};

let result = twoSum(inputArr, target);
console.log(result); // Output: [1, 2]

//----Remove Duplicates from Sorted List--//

let removeDuplicates = function (head) {
  if (!head) return head;
};
