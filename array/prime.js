var isPrime = true;
const n = 12;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("prime number");
} else {
  console.log("not prime");
}
