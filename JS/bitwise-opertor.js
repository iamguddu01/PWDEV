// Bitwise AND
console.log(5 & 3);  // If both the bits are 1 than 1 else 0 
console.log(5&7);
console.log(7&8);


// Bitwise OR
console.log(10 | 8);  // If any one of the bit is 1 than ans will 1 else 0

// Bitwise XOR (Exclusive or)
console.log(9 ^ 8); // If any one bit is 1 than ans is 1,
                    //  If both the bits are one than ans 0,
                    //  If both bits are 0 ans is 0.


// Bitwise NOT
console.log(~5);   // Turns 1 to 0, 0 to 1. 

/* -128 -> +127
MSB -> (Most significant bit) */


/* -4 -> Binary representation 
1) Identify the binary representation of its positive form 
2) invert all the off -> on, on -> off (0 -> 1, 1 -> 0)
3) Add 1 to the result */