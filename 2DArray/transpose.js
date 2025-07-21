var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var arr = [];
for (let i = 0; i < matrix.length; i++) {
  arr[i] = [];
  for (let j = 0; j < matrix.length; j++) {
    arr[i][j] = matrix[j][i];
  }
}
console.log(arr);
