// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
function greeting() {
    let time = new Date().getHours();
    let greet = (time >= 12) ? "good afternoon" : "good morning";
    return greet;
}

console.log(greeting());   

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------
const countToZero = (number) => {
    let numArray = [number];
    for (let i = 1; i <= number; i++)
    {
        numArray.push(number-i);
    }
    return numArray;
}

console.log(countToZero(10));