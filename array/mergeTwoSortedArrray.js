// var arr1 = [1, 2, 3, 5, 7, 8, 9];
// var arr2 = [3, 4, 6, 10, 12];
// var arr = [];
// var m = arr1.length - 1;
// var n = arr2.length - 1;
// var i = 0;
// var j = 0;

// while (i <= m && j <= n) {
//   if (arr1[i] <= arr2[j]) {
//     arr.push(arr1[i]);
//     i++;
//   } else {
//     arr.push(arr2[j]);
//     j++;
//   }
// }
// while (i <= m) {
//   arr.push(arr1[i]);
//   i++;
// }
// while (j <= n) {
//   arr.push(arr2[j]);
//   j++;
// }

// console.log(arr);

//  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// function mergeSortedArray(arr1, m, arr2, n) {
//   var i = 0;
//   var j = 0;
//   var index = 0;
//   var merged = [];
//   while (i < m + n) {
//     if (arr1[i] === 0) {
//       i++;
//     } else if (arr1[i] <= arr2[j]) {
//       merged[index++] = arr1[i++];
//     } else {
//       merged[index++] = arr2[j++];
//     }
//   }

//   while (i < m) {
//     merged[index++] = arr1[i++];
//   }

//   while (j < n) {
//     merged[index++] = arr2[j++];
//   }
//   return merged;
// }

function mergeSortedArray(arr1, m, arr2, n) {}
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
