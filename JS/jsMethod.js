// concat 
// Does not modify array  
let arr1 = [1,2,3];
let arr2 = [4,5];
let arr3 = [5,6];
let arr4 = [7,8];
let arr6 = ["abcd", true]
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr);
let mergedArr = arr1.concat(arr1,arr2,arr3,arr4,arr6);
console.log(mergedArr);


// Reduce Method
let a = [1,2,3,4,5,6,7,8,9];
a.reduce((acc, curr) => {
    console.log(acc+":"+curr);
    return acc + curr;
},0)

// Reduce right => right to left 
let str = ["a", "b", "c", "d"];
const rsstr = str.reduceRight((acc, curr) => {
    console.log(acc +":" +curr);
    return acc + curr;
})


// Flatend Dsa question 
let nestedArr = [[1,2],[3,4],[5,6]];
const rs = nestedArr.reduce((acc, curr)=> {
    // console.log(acc);
    // console.log(curr);

    // return [...acc,...curr];
    return acc.concat(curr);
},[])
console.log(rs);


// Every function 
// If all the condition is true than true but if one element is false than ans will false
let brr = [2,4,6,8];

function isEven(brr){
   return brr.every((e) => {  // returning true false
        return e % 2 == 0 ;
    });
}
console.log(isEven(brr));

function arePos (brr){
    return brr.every((e) => e >0);
}
console.log(arePos(brr));



// some function 
// If atleast one ans will True the final ans will be true 

function isAtleastOneNeg(brr){
    return brr.some((e) => e < 0); // Returning true false
}
console.log(isAtleastOneNeg(brr));


let marks1 = [40,50,55,43,67];
let marks2 = [54,50,55,73,67];
function isPass(marks){
    return marks.every((e) => e >= 50);
}
console.log(isPass(marks2));