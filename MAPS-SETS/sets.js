// its a private data member not property, which can not edit by outer source
// It stores unique value means no duplicate
// It is case sensetive
const nums = new Set();
// Adding values
nums.add(1);
nums.add(2);
nums.add(3);
nums.add(1); // Ignore 
console.log(nums);

// Adding dynamically
const tags = new Set(["Javascript", "CSS", "REACT", "css"]);
console.log(tags);

// has
if(tags.has("Javascript")){
    console.log("IT is a js article");
}
//Delete
tags.delete("CSS");
console.log(tags);

// Iteration
for(let tag of tags){
    console.log(tag);
}

// values
console.log(tags.values());

// Iterate using values
for(let tag of tags.values()){
    console.log(tag);
}
// Size 
console.log(tags.size);

// clear
tags.clear();

// Set to array
const mySet = new Set([1,2,3,4,5]);
let arr = [...mySet]
console.log(arr);

// Array to set 
let arrr = [1,2,3,4,5];
let set = new Set([...arrr]);
console.log(set);

// Using union (returns boolean some new fuctions of maths introduced, can be take look in mdn )
const evens = new Set([4,6,8])
const odd = new Set([1,2,3,5,7])
console.log(evens.union(odd));

// Enteries
const sset = new Set(['a', 'b', 'c'])
const setItretor = sset.entries();
console.log(setItretor);
