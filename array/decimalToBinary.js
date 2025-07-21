var n = "1010";

var result = 0;

for (let i = 0; i < n.length; i++) {
  result += n[n.length - 1 - i] * Math.pow(2, i);
}
console.log(result);
