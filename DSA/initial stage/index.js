//----Remove Duplicates from array--//
let removeDuplicates = function (numbers) {
  let slow = 0;

  for (let fast = 1; fast < numbers.length; fast++) {
    if (numbers[fast] !== numbers[slow]) {
      slow++;
      numbers[slow] = numbers[fast];
    }
  }
  return slow + 1;
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2
