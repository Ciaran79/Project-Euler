// let final: number = 13195;
let final = 503195;
// const final = 15;
// let final: number = 600851475143;
// let final: number = 5415143;
console.time("getPrimes");
const primesArray = getPrimeNumbers(final, 2);
console.timeEnd("getPrimes");
console.time("getFactors");
const primeFactors = primeFactorFilter(primesArray, final);
console.timeEnd("getFactors");
console.time("getLargestFactor");
const largestPrimeFactor = getLargestPrimeFactor(primeFactors);
console.timeEnd("getLargestFactor");
// console.info(primesArray);
console.info(primeFactors);
// console.log(largestPrimeFactor);
function getPrimeNumbers(target, factors = 2) {
    let currentNumber = 2;
    let primes = [];
    if (currentNumber > 3) {
        primes = [2, 3];
        currentNumber = 4;
    }
    while (currentNumber <= target / factors) {
        //  workout if number is prime
        let x = 2;
        let isPrime = true;
        while (x <= currentNumber / 2) {
            if (isPrime) {
                if (currentNumber % x == 0) {
                    isPrime = false;
                    break;
                }
            }
            x++;
        }
        if (isPrime) {
            primes.push(currentNumber);
        }
        currentNumber++;
    }
    return primes;
}
function primeFactorFilter(array, num) {
    let factors = [];
    array.forEach(element => {
        if (num % element == 0) {
            factors.push(element);
        }
    });
    return factors;
}
function getLargestPrimeFactor(array) {
    return Math.max(...array);
}
//# sourceMappingURL=3_largest_prime_factor.js.map