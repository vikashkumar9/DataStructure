//  function noOfOcc(arr){
//      var obj={}
//      arr.map((i)=>{
//          obj[i]=(obj[i] ||0)+1
//      })
//      return obj
//  }

//  console.log(noOfOcc([1,2,2,2,3,4,2,55,5,6,6,4,4]))

// using map

function noOfOcc(arr) {
  var map = new Map();
  for (let nums of arr) {
    map.set(nums, (map.get(nums) || 0) + 1);
  }
  return map;
}

console.log(noOfOcc([1, 2, 2, 2, 3, 4, 2, 55, 5, 6, 6, 4, 4]));
