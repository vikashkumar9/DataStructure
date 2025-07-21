var a = 0;
var b = 1;
var n = 10;

for (let i = 0; i <= n; i++) {
  var result = a + b;
  console.log(result);
  a = b;
  b = result;
}
