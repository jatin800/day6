// function func(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
//   target = 2;
// console.log(func(nums, target));
// function func(matrix, target) {
//   let m = matrix.length;
//   let n = matrix[0].length;

//   let left = 0;
//   right = m * n - 1;

//   while (left <= right) {
//     const midIDX = Math.floor((left + right) / 2);
//     const midValue = matrix[Math.floor(midIDX / n)][midIDX % n];

//     if (midValue === target) {
//       return true;
//     } else if (midValue < target) {
//       left = midIDX + 1;
//     } else {
//       right = midIDX - 1;
//     }
//   }
//   return false;
// }
// console.log(func(matrix, target));
// function func(piles, h) {
//   let left = 0;
//   let right = Math.max(...piles);
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     let totalHours = 0;

//     for (let pile of piles) {
//       totalHours += Math.ceil(pile / mid);
//     }
//     if (totalHours <= h) right = mid;
//     else left = mid + 1;
//   }
//   return left;
// }
// console.log(func(piles, h));
// function func(nums) {
//   left = -0;
//   right = nums.length - 1;

//   if (nums[left] < nums[right]) return nums[left];

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return nums[left];
// }
// console.log(func(nums));
// function func(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <=right) {
//     const mid = left + Math.floor((right - left) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return -1;
// }
// console.log(func(nums, target));
