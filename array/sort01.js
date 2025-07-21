const arr = [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1];

let i = 0;
let j = arr.length - 1;

while (i < j) {
  if (arr[i] === 0) {
    i++;
  } else if (arr[j] === 1) {
    j--;
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

console.log("arr", arr);
