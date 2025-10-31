// rest opertor
function add(a, b, ...nums) {
    console.log(a + " : " + b);
    console.log(nums);

    let sum = 0;

    // nums.forEach(eNum => {
    //     sum += eNum;
    // });

    for(let i=0; i<nums.length; i++)    //
        sum += nums[i];

    return a + b + sum; // 10 + 20 + 0 => 210
}

let sum = add(10, 20);

console.log("sum : " + sum);