var arr = [1, 2, 0, 6, 0, 0, 6, 4, 5, 0];

// var j = arr.length - 1;
// var i = 0;

// while (i <= j) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j--;
//   } else {
//     i++;
//   }
// }
// console.log(arr);
var index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[i], arr[index]] = [arr[index], arr[i]];
    index++;
  }
}

console.log(arr);
