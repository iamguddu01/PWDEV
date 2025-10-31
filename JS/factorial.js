function fact(n) {
    // base case
    if(n == 1)
        return 1;

    // recurrsive function call
    return fact(n-1) * n;
}

let ans = fact(5);
console.log(ans);