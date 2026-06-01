// executes the code at least once, even if the condition is false. 
/*
do {
    // code 
} while (condition); 
*/

let i = 1; 

do {
    console.log(i); ;
    i++; 
} while (i <= 5); 

// even though condition is false, the code runs once 

let a = 10; 
do {
    console.log("Executed"); 
} while (a < 5); 