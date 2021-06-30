// Directions: Translate from normal function to pure function
let greeting = 'Hello, '

const greet = (name, base_greeting) => {
    //let sayHello;
    //sayHello = greeting + name;
    return `${base_greeting} ${name}`;
}

// This code looks fine at first, but what if we needed to use this greet function again? 
// The greet function has unexpected results if used more than once because the greeting 
// variable is changed (mutated) to contain the name it is run with.

greet('Arthur.', greeting)

// Here is the problem:
console.log(greet('Arthur.', greeting))
console.log(greet('Guinevere.', greeting))
// Output: 
//  Hello, Arthur. 
//  Hello, Arthur. Guinevere. 

// But that isn't what we want! There are many many ways you can fix this 
// function to make it pure. When it is pure it will also be resuable.

// Desired output:
//  Hello, Arthur. 
//  Hello, Guinevere. 
