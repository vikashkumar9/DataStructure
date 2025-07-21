// var arr=[2,2,3,4,4,6]
// var ans=0
// for(let i=0;i<=arr.length-1;i++){
//    ans=ans^arr[i]
// }
// console.log(ans)

var arr = [2, 2, 3, 4, 4, 4, 6, 2, 8];
var unique = [];

for (let i = 0; i < arr.length; i++) {
  var isUnique = true;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    unique.push(arr[i]);
  }
}

console.log(unique); // Output: [3, 6]
