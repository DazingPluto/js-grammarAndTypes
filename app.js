//grammar and types

// javascript borrows most syntax from Java, C, C++


/**DECLERATIONS */

var sugar
let blueberry
const crust

// variables are SYMBOLIC NAMES for VALUES in your application.
// right now we have declared 3 variables with a value of undefined.
// undefined can be used to determind weather a variable has value.

if ( input === undefined){
    doThis();
}else{
    doThat();
}

// in this boolean equation the undefined acts as a false value.

var myArray = [];
if(!myArray[0]) myFunction()  

//This states, if my array is empty then execute myFuction().

var a
a + 2 // NAN

var number = null;
console.log(2*number); // will come as 0 since null numerically is 0 and false in boolean


// Variable scope..
// If the variable is inside of the fuction is is local and can only be used in the fuction
// if the variable is outside any function or block.. it is LOCAL in JavaScript.

if (true) {
    var x = 5
}
console.log(x); // this would give the answer 5 because using var delcares a global variable

if (true) {
    let y = 5
}
console.log(y) // this would give undefined.. Meaning no definition at all.. because let in not universally defined.

console.log(yell)// ref error

let yell = 'scream'; // if you call on a variable before its delared you will get a ref error

// FUNCTION HOISTING //

/** functions can be hoisted when using a function delceration */

foo()// this works because we are hoisting from the delcared function from below

function foo(){
    console.log('bar');
}

/** however when a function is not declared you will have issues, and cannot hoist */

console.log(baz); // this would be undefined because baz exsist as a var but not a funtion

baz(); // this would return TypeError not a funtion, because we did not declare a function

var baz = () => {
    console.log('bar2') // function EXPRESSION
}

/** Constant */

const pi = 3.14;


// this will cause an error  you cannot declare a function after you have used the same identifier on a const variable

function f() {

}

const f = []

function F() {
    const g = []    // this will also throw an error because you have declared a variable at the same name as the const in the same scope..
    var g = {}
}

// the properties of objects in const are not protected... therefore the following statement can be executed without issue.

const MY_OBJECT = { key: 'value'};
MY_OBJECT.key = 'otherValue';

// Also the contents of an array are not protected so you can execute changes to a Const array without problem.

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JavaScript');
console.log(MY_ARRAY);

var answer = 42;

//later you can use answer to assign a new value

answer = "this is the new value";  

x = 'the answer is' + 42; // "The answer is 42"


y = 42 + 'the answer is'; //"42 is the answer"

z = "37" + 7; // "377"

// + is the only operator that allows one to switch from numberic datatype to string datatype.... - will not work and will give a numeric answer

// using the plus (unary plus) operator is another way to gather numeric datatypes from a string

'1.1' + '1.1' // '1.11.1' as a string
(+"1.1") + (+"1.1") // 2.2

/** JAVASCRIPT LITERALS */

//ARRAY LITERAL

let coffees = [ "French Roast", "Columbian", "Roasted Caramel"];

// if you leave two commas in an array literal the computer will place a spot for an empty array elment inside that array

const fish = ["Lion", , "Angel"];

// if you itterate the fish aray the empty space will be skipped.. However if you call by fish[1] you will get an answer of unidentified.

const myList = ["home", , "office", ,] // the length is 4 even tho 1 and 3 are missing
let myOtherList = ["home",/*empty*/ , "office", /*empty*/ ,] // its best practice to place the word empty commented out.. inside of an undefined spot.

/* Integer Literals */

// decimal integer// base 10

const myDecimanAndBaseTen = [ 0, 117, 123456789n];

// octal interger// base 8

const myOctalAndBaseEight = [015, 0001, 0o777777777777777777777n];

// hexidecimal integer// base 16

const myHexidecimalAndBaseSixteen = [0x11, 0x0001111, 0x12345678abcABC];

//binary integer// base 2

const myBinaryAndBaseTwo = [0b11, 0b00001111, 0b0110110101010101101];

/* Floating Point Literal */

var sales = 'Toyota';

function carTypes(name) { 
    if (name === 'Honda'){
        return name
    } else {
        return "Sorry we dont sell that"+name+".";
    }
}

var car = {
    myCar: "Saturn",
    getCar: carTypes('Honda'),
    special: sales
};

console.log(car.myCar);      //Saturn
console.log(car.getCar);     //Honda
console.log(car.special);    //Toyota

var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda'}

console.log(car.manyCars.b);
console.log(car[7]);

var unusualPropertyNames = {
    '': 'An Empty String',
    '!':'Bang'
}

console.log(unusualPropertyNames.''); // syntax error
console.log(unusualPropertyNames['']);  // and empty string
console.log(unusualPropertyNames.!);  // syntax error


console.log(unusalPropertyNames['!']) // BANG






