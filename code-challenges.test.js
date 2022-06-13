// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe ("stringsSecret", () => {
    it("returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () =>{
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
expect(stringsSecret(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
expect(stringsSecret(secretCodeWord2)).toEqual("G0bbl3dyg00k")
expect(stringsSecret(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: stringsSecret is not defined


// const secretCodeWord1 = "Lackadaisical"
// //  Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// //  Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

// Create a function called stringsSecret that will take a string and it will replace  'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//the function will take a paramenter of string
//Use method .replace() it will return a new string with the values we want replaced
// For the uppercase letters use brackets, this will find any of the characters in the string 



const stringsSecret = (string) => {
let sample = string.replace( /a/g,"4").replace(/[eE]/g,"3").replace(/i/g,"1").replace(/o/g,"0")
return sample
}

// console.log(stringsSecret(secretCodeWord3))
// console.log(stringsSecret(secretCodeWord1))
// console.log(stringsSecret( secretCodeWord2))

// PASS  ./code-challenges.test.js
// stringsSecret
//   ✓ returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("particularL", () =>{
    it ("returns an array with all the words provided by an array of words or a single letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e" 
        expect(particularL(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(particularL(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })

})

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: particularL is not defined

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

//Create a function that will with the name particularL that will take an array and a string as parameters
//use the method .filter that will only keep the values that we need, the words with letter a and e
// Use methods toUpperCase and toLowerCase to get the values that are both upper and lower case
//Use the || OR so that the value includes upper case or lowercase letters




const particularL =  (array, string) => {
    return array.filter(value => value.includes(string.toUpperCase()) || value.includes(string.toLowerCase())
)}





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("returns a true or false statement depending if the array given is a full house.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
    expect(fullHouse(hand1)).toEqual(true)
     expect(fullHouse(hand2)).toEqual(false)
     expect(fullHouse(hand3)).toEqual(false)
    })
})

//for some reason i get FAIL  ./code-challenges.test.js  ● Test suite failed to run. But if I open a new file and try the same test it do get the good fail. 

// Your test suite must contain at least one test.//


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.

//create a function called fullHouse that will take a parameter of array. 
//the function will check if theres exactly one pair and one three of a kind.
// Use a conditional and the paramenter with brackets to indicate the index of the value
// If the arrays indixes is equal to the 1st and 2nd AND the 3rd is equal to the 4th return true
//else return false

// It did not pass here it stills says the test suite must contain a test :(

const fullHouse = (array) =>{
    if (array[0] === array[1, 2] && array[3] === array[4])
    return true
    else
    return false
    
}
console.log(fullHouse(hand3))
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
