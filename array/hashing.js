// var map = new Map();
// map.set("name", "Vikash");
// map.set("ph", 23);
// map.delete("name");

// console.log(map.get("name"));

// var set1 = new Set();

// set1.add(10);
// set1.add(30);
// set1.add(10);
// set1.add(20);
// set1.delete(10);
// console.log(set1.has(20));
// function noOfOcc(arr) {
//   var map = new Map();
//   for (let nums of arr) {
//     map.set(nums, (map.get(nums) || 0) + 1);
//   }
//   return map;
// }

// console.log(noOfOcc([1, 2, 2, 2, 3, 4, 2, 55, 5, 6, 6, 4, 4]));

var hashing = {};

hashing["name"] = "vikash";
hashing["roll"] = 23;

console.log(hashing["name"]);
delete hashing["roll"];

console.log(hashing["roll"]);
