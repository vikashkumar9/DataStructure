function palamdrom(str) {
  var arr = str.split("");

  var i = 0;
  var j = arr.length - 1;
  var pl = true;

  while (i < j) {
    if (arr[i] !== arr[j]) {
      pl = false;
      break;
    }
    i++;
    j--;
  }
  return pl;
}
console.log(palamdrom("vikivs"));
