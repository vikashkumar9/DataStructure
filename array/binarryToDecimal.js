var n = 11;
var str = "";
while (n > 0) {
  //   r = n % 2;
  if (n & 1) {
    str += 1;
  } else {
    str += 0;
  }

  n = Math.floor(n / 2);
}
console.log(str.split("").reverse().join(""));
