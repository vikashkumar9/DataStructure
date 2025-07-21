function reverseArray(arr) {
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 4, 5, 6, 6, 7, 5, 6, 1]));
