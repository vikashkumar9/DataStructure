function pivotIndex(arr) {
  var totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  var leftsum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (leftsum === totalSum - leftsum - arr[i]) {
      return i;
    }
    leftsum += arr[i];
  }
  return -1;
}

console.log(pivotIndex([1, 2, 3]));
