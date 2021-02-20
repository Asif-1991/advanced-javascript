// slice, splice
//=============================
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15]

const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(4, 6, 21, 22,);
console.log(removed);
console.log(nums);

const together = nums.join(",|");
console.log(together);
