//Assignment 1
// 1 
let num1 = "123";
let num2 = Number(num1) + 7;
console.log(num2);
//2
let num3 = 0;
if (num3 === 0) {
    console.log("invalid");
};
//3
let i = 0;
for (i = 0 ; i <= 10 ; i++){
    if ( i % 2 === 0){
        continue;
    }
    console.log(i);
}
//4
let num4 = [1, 2, 3, 4, 5];
num4.filter((value) => {
    if (value % 2 === 0){
        console.log(value);
    }
});
//5
let num5 = [1, 2, 3];
let num6 = [4, 5, 6];
console.log([...num5 , ...num6]);
//6
const day = 2;
switch (day){
    case 1 : console.log("sunday");
    break;
    case 2 : console.log("monday");
    break;
    case 3 : console.log("tuesday");
    break;
    case 4 : console.log("wednesday");
    break;
    case 5 : console.log("thursday");
    break;
    case 6 : console.log("friday");
    break;
    case 7 : console.log("saturday");
    break;
}
// 7
let array = ["a" , "ab" , "abc"];
array.map((value) => {
    console.log(value.length);
});
// 8
function check(numb){
    if ( numb % 3 === 0 && numb % 5 === 0){

        console.log(" divisible by both");
    }

};
check(15);
//9
let num7 = 5;
num7 = (num8) => {
    return num8 * num8;
};
console.log(num7(5));
//10
function getperson({name, age}){
    return `name is ${name} and age is ${age}`;
}

console.log(getperson({name: "John", age: 30}));
//11
function sum(...numbers){
    console.log(numbers);
}
sum(1, 2, 3, 4, 5);
//12

//13

//14
function details(obj){
    return `name is ${obj.name} and age is ${obj.age}`;
}
console.log(Object.keys({name: "John", age: 30}));
//15
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));

// assignment 2
//1
//The for...of loop is used to iterate over iterable values such as arrays and string
//when we use continue and break
//the for...each loop is used to iterate over the elements of an array and execute a function for each element
//when you want to execute a function for each element of an array and you don't need to use continue or break
//2
//var declarations are hoisted and initialized with undefined.
//The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable
//3
// == Compares values after performing type coercion when necessary
// === Compares both value and data type without type coercion
//4
// try-catch is used to handle errors
//5
//Type conversion means changing a value from one data type to another manually.
//Type coercion means JavaScript automatically converts a value from one data type to another.






