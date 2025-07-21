function peakelement(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(peakelement([1, 2, 3, 4, 5, 1, 3, 4, 4, 6, 7, 1, 2]));
