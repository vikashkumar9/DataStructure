var arr = [1, 2, 3, 4, 5, 6];

// for (let j = 0; j < 2; j++) {
//   var last = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     [(arr[i] = arr[i + 1])];
//   }
//   arr[arr.length - 1] = last;
// }
// console.log(arr);

// function rotateArray(arr, m) {
//   var temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp[(i + m) % arr.length] = arr[i];
//   }

//   arr = temp;
//   return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 1));
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

var i = 0;
var j = 0;
var carry = 0;
var arr = [];
while (i <= arr1.length - 1 || j <= arr2.length - 1 || carry > 0) {
  let sum = carry + arr1[i] + arr2[j];
  if (sum > 9) {
    sum = sum % 10;
    carry = Math.Floor(sum / 10);
  }
  arr.unshift(sum);
  i--;
  j--;
}

console.log(arr);
