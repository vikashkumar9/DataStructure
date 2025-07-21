var arr1 = [1, 2, 3];
var arr2 = [3, 4, 8, 1];

var i = arr1.length - 1;
var j = arr2.length - 1;
var carry = 0;
var arr = [];
while (i >= 0 || j >= 0 || carry > 0) {
  let sum = carry;
  if (i >= 0) sum += arr1[i];
  if (j >= 0) sum += arr2[j];

  i--;
  j--;
  arr.unshift(sum % 10);
  carry = Math.floor(sum / 10);
}

console.log(arr);
