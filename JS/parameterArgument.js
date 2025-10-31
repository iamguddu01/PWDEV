function square(num) {
    return num * num;
}

function add(a, b) {
    return a+b;
}

function multiple(a, b, c) {
    return a * b * c;
}


function addNNums(num1, num2, ...arr) {
    let rs = 0;

    for(let i=0; i<arr.length; i++)
        rs += arr[i];

    return rs;
}

addNNums(1, 2);
addNNums(1, 2, 3);
addNNums(1, 2, 3, 4);