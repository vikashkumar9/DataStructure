var str = "my name is vikash";
var arr = str.split("");
var str1 = "";
var i = 0;
var j = 0;

while (j < arr.length) {
  if (arr[j] !== " ") {
    j++;
  } else {
    str1 += arr.slice(i, j).reverse().join("") + " ";
    i = j + 1;
    j = i;
  }
}
str1 += arr.slice(i, arr.length).reverse().join("") + " ";
console.log(str1);
