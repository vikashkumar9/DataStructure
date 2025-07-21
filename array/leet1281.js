var number = 12345;
var sum = 0;
var product = 1;
while (number !== 0) {
  var r = Math.floor(number % 10);
  sum += r;
  product *= r;
  number = Math.floor(number / 10);
}
console.log("sum", sum, "product", product);
