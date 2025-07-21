var str = "my nameisvikash";
var arr = str.split("");
var obj = {};

arr.map((i) => (obj[i] = (obj[i] || 0) + 1));

console.log(obj["m"]);
var max = 0;
var key = "";
for (let k in obj) {
  if (obj[k] > max) {
    max = obj[k];
    key = k;
  }
}
console.log(key, ":", max);
