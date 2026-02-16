let digits = [1,2,3,4]
var plusOne = function(digits) {
    let num = 0;
    for(let i = 0; i<digits.length; i++){
        num = (num * 10) + digits[i]
    }
    num = num + 1;
    let result = [];
    console.log(num);
    console.log("hii");
    while(num > 0){
        let last = num % 10;
        result.push(last)
        num = Math.floor(num/10)
    }
    return result;
};
console.log(plusOne(digits));