let increment = require('./cache');
increment();  // Output = 1
increment(); //Output = 2
increment();   //Output = 3
increment();   //Output = 4
increment();   // Output = 5
let increment2 = require('./cache');  // DOES NOT LOADED AGAIN
increment2();   // Output = 6     bcoz of caching the variable is changed only not the data bcoz require does not loaded again