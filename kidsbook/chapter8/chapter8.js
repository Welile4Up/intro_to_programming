// let ourFirstFunction = function() {
//     console.log("Hello world!");
// }

// ourFirstFunction();
// ourFirstFunction();

// ourFirstFunction();
// ourFirstFunction();


// function ourFirstFunction() {
//     console.log("Hello World!");
// }


// sayHelloTo("Sherrry");
// sayHelloTo("Nick");

// function sayHelloTo(name) {
//     alert(`Hello ${name}`);
// }

// drawCats(15);

// function drawCats(howManyTimes) {
//     for(let i = 0; i < howManyTimes; i++) {
//         console.log("=^.^=");
//     }
// }

// drawCats(4, "0^0");
// drawCats (34, "=0^0=");

// function drawCats(howManyTimes, whatToDraw) {
//     for(let i = 0; i < howManyTimes; i++) {
//         console.log("=^.^=");
//     }
// }

// function add(num1, num2, num3)  {
//     console.log("sum = " + (num1 + num2 + num3));
// }

// add(10, 100, 30000);

// function double(num) {
//     return num*2;
// }
// console.log(double(25));
// console.log(Math.floor(100.99));
// console.log(double(100) + double(34));

// function fullName(fname, sname) {
//     return ("Your full name is " + fname + " " + sname);
// }

// let sentence = fullName("Sheryl", "Dreyer");
// alert (sentence);


// function address(number, complex) {
//     return ("Your address is " + number + " " + complex);
// }

// let sentence = address("14", "Spierwood");
// alert (sentence);


// let randomWords = ["Planet", "Worm", "Flower", "Computer"];

// console.log(pickRandomWord(randomWords));

// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// function generateInsult() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
    
    
//     // Join all the random strings into a sentence:
//     let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives)
//     + " " + pickRandomWord(randomWords) + "!!!";
//     console.log(randomString);
// }

// generateInsult();


// alert(fifthLetter("Nicholas"));

// function fifthLetter(name) {
//     if (name.length < 5) {
//         return;
//     }
//     return "The fifth letter of your name is " + name[4];
// }


//PROGRAMMING CHALLENGES
//NUMBER 1

// function add(number1, number2) {
//     return number1 + number2;
// }

// function multiply(number1, number2) {
//     return number1 * number2;
// }

// console.log(add(multiply(36325, 9824), 777));

// //NUMBER 2

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (let i = 0; i < array2.length; i++) {
//         if(array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// }


//ADDITIONAL EXERCISES ON FUNCTIONS
//Function that returns something and one that does not return anything

//does not return anything

// farewell("Themba")

// function farewell (name) {
//     console.log("Goodbye, " + name + "!");
// }


// //returns something

// let result = add(3, 5);

// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(result);

