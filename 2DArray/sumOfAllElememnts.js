var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    sum += matrix[i][j];
  }
}
console.log(sum);
