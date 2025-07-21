const arr = [0, 1, 1, 1, 2, 2, 1, 1, 2, 0, 0, 1];

var i = 0;
var j = 0;
var m = arr.length - 1;

while (j <= m) {
  if (arr[j] === 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j++;
  } else if (arr[j] === 1) {
    j++;
  } else if (arr[j] === 2) {
    [arr[j], arr[m]] = [arr[m], arr[j]];
    m--;
  }
}
console.log(arr);
