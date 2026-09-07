//----Remove Duplicates from Sorted List--//
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

