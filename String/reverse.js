var str = "vikash";

var i = 0;
var j = str.length - 1;
var arr = str.split("");
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}
console.log(arr.join(""));

console.log(str.split("").reverse().join(""));
