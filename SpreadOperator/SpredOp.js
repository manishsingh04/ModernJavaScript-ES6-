

//https://chatgpt.com/c/93607a40-0f6a-452c-9e1a-28e3a0215231

//1 ->Copying Arrays:
//You can create a shallow copy of an array.

const originalArray = [1, 2, 3];
const copiedArray1 = [...originalArray];
const copiedArray2 = [...originalArray, 4, 5, 6];
console.log(copiedArray1); // [1, 2, 3]
console.log(copiedArray1); // [1, 2, 3,4, 5, 6]
console.log(originalArray);//[1, 2, 3]-> Spread opertor not modify originalArray,if it is not nested


//2.Combining Arrays:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


//3 Spreading Elements in Function Calls:
//You can pass elements of an array as arguments to a function.

const numbers = [1, 2, 3];
const sum = (a, b, c) => {
    return a + b + c
}
console.log(sum(...numbers)); // 6


//4.Copying Objects:
//Similar to arrays, you can create a shallow copy of an object.


const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // { a: 1, b: 2 }


//5.Merging Objects:

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }


//6th: Adding/Overwriting Properties in Objects: (vvvvimmppp)

const myObj = {
    name: "Manish",
    age: 23,
    city: "Mumbai"
}

console.log(myObj.name);
console.log(myObj);


const myModifyObj = {

    ...myObj,
    name: "Rithvik"
}

console.log(myModifyObj.name);
console.log(myModifyObj);

//NOTE:





//NOTE :: The spread operator only performs a shallow copy, meaning it doesn't copy nested  objects or arrays deeply.

//Does spread opertor modify original array, or object  ?
//ANS->No, the spread operator does not modify the original array or object. Instead, it creates a shallow copy of the array or object when used. The original data remains unchanged.


/*
Shallow Copy with the Spread Operator
When you create a shallow copy of an array or object using the spread operator, the top-level elements are copied, but nested objects or arrays are not deeply copied. This means:
->Primitive values (e.g., numbers, strings, booleans) are copied by value.
->References to objects or arrays are copied by reference, not by value.


What Does This Mean in Practice?
->Top-Level Properties: If you modify the shallow copy, it won't affect the original array or object.

->Nested Objects/Arrays: If the shallow copy contains nested objects or arrays, and you modify the nested structure, the original array or object will be affected because both the original and the copy share the same reference to the nested data.

->Example with an Array of Objects:
const originalArray = [{ a: 1 }, { b: 2 }];
const shallowCopy = [...originalArray];

shallowCopy[0].a = 10;
console.log(originalArray); // [{ a: 10 }, { b: 2 }] (changed)
console.log(shallowCopy);   // [{ a: 10 }, { b: 2 }]


->Example with an Object Containing Nested Objects:

const originalObject = { x: { y: 1 }, z: 2 };
const shallowCopy = { ...originalObject };

shallowCopy.x.y = 10;
console.log(originalObject); // { x: { y: 10 }, z: 2 } (changed)
console.log(shallowCopy);    // { x: { y: 10 }, z: 2 }



*/