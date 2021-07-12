function countPrimeNumbers() {
    let primes = [];
    let ifPrime = async n => {
        let i;
        for (j = 2; j < n; j++) {
            if (n % j == 0) return false;
        }
        return true;
    }
    for (i = 3; i < 101; i++) {
        i = ifPrime(i);
        if (i) primes.push(i);
    }
    return primes;
}
console.log(countPrimeNumbers());