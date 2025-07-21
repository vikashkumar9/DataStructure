const arr = [1, 3, 4, 5, 6, 7, 8, 9];
var i = 0;
var j = arr.length - 1;

var n = 2;
while (i <= j) {
  var mid = Math.floor((i + j) / 2);
  if (arr[mid] === n) {
    console.log(mid);
    break;
  } else if (arr[mid] > n) {
    j = mid - 1;
  } else {
    i = mid + 1;
  }
}
