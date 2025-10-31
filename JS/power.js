function power(x, n) {
    // base case
    if(n == 1)
        return x;

    // recurrsive call
    return power(x, n-1) * x;
}

console.log(power(2, 5));
console.log(power(10, 3));
console.log(power(2, 10));