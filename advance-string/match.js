// match in strings => It is a pattern matching technique
// It is case sensetive menthod
// Only first occurence will be return as result
// If the result will not fount in input it will give NULL
let text = "I love javascript, Javascript, Order 45 items for 300 Rupees, Alice and Bob1 went to Delhi2";

// let result = text.match("love"); 

// let result = text.match(/Love/i); // i is a flag for ignoring case, it will ignore the case and match only characters, now it's not case sensetive

// let result = text.match(/javascript/g); // g is a flag represents global, means it will give result of all occurences

// let result = text.match(/\d+/g); // \d is flag, it is used to get the numeric occurences only numeric digits, Using g to get all nums, + sign after flags to get complete whole numbers without spacing 

let result = text.match(/\b[A-Z][a-z]+/g); // \b => word boundary here we specifying that the word should start with capital from A-Z
                                          // [a-z]+ => means other word could be small character
                                          // Getting first occurence without global g flag, and all characters with g

console.log(result);
