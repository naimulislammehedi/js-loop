//for...in Loop: used to iterate through object property. 
const person = {
    name: "Mehedi", 
    age: 25, 
    country: "Bangladesh"
}; 

for (const key in person) {
    console.log(key, person[key]); 
}