var arr = [1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 5, 6, 6, 7, 8];

function firstOcc(arr, n) {
  var i = 0;
  var ans = -1;
  var j = arr.length - 1;
  while (i <= j) {
    var mid = Math.floor((i + j) / 2);
    if (arr[mid] === n) {
      ans = mid;
      j = mid - 1;
    } else if (arr[mid] > n) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return ans;
}

function lastOcc(arr, n) {
  var i = 0;
  var ans = -1;
  var j = arr.length - 1;
  while (i <= j) {
    var mid = Math.floor((i + j) / 2);
    if (arr[mid] === n) {
      ans = mid;
      i = mid + 1;
    } else if (arr[mid] > n) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return ans;
}

console.log(firstOcc(arr, 3));
console.log(lastOcc(arr, 3));
