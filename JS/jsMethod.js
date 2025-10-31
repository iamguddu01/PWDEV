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



let nestedArr = [[1,2],[3,4],[5,6]];
const rs = nestedArr.reduce((acc, curr)=> {
    // console.log(acc);
    // console.log(curr);

    // return [...acc,...curr];
    return acc.concat(curr);
},[])
console.log(rs);


