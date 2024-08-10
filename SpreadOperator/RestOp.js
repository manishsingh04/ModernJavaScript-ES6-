


//Syntax:
/*
function myFunction(a, b, ...rest) {
    console.log(a); // first argument
    console.log(b); // second argument
    console.log(rest); // return in array ,rest of the arguments.
}

myFunction()*/


function myFunction(a, b, ...rest) {
    console.log(a); // first argument
    console.log(b); // second argument
    console.log(rest); // return in array ,rest of the arguments.

    //return rest.reduce((acc, curr) => acc + curr, 0)


}

//console.log(myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



/*
function sum(...numers) {

    let total = 0;
    for (let i = 0; i < numers.length; i++) {

        total += numers[i];
    }
    return total


    ret
}

let totalSum = sum(1, 2, 3, 4, 5);
console.log(totalSum);
*/


/*
//2. Array Destructuring:

const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(first);
console.log(second);
console.log(rest); //op [3, 4, 5, 6, 7, 8, 9, 10]

*/




//3. Object Destructuring:

const person = {

    name: "Manish",
    age: 23,
    DOB: 2004,
    hobbies: ["Cricket", "Music"]
}
//Normal way
// console.log(person.name);
// console.log(person["name"]);


const { name, ...remaining } = person;

console.log(name);
console.log(remaining);



//https://chatgpt.com/c/283931b7-2b47-4065-b26c-e3d2faec07cf


