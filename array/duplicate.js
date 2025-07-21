var arr = [1, 2, 3, 4, 3, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
  var duplicate = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      duplicate = true;
      break;
    }
  }
  if (duplicate) {
    console.log(arr[i]);
  }
}
