// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

let cloneStrings = [...strings];
let cloneNumbers = [...numbers];

// - Find the index of `101` in numbers

cloneNumbers.indexOf(101);

// - Find the last index of `9` in numbers

cloneNumbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

cloneStrings.join(" ");

// - Add two new words in the strings array "called" and "sentance"

cloneStrings.push("called", "sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

cloneStrings.join(" ");

// - Remove the first word in the array (strings)

cloneStrings.shift();

// - Find all the words that contain 'is' use string method 'includes'

let is = cloneStrings.filter((cloneStrings) => cloneStrings.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'

let isAll = clonestrings.filter(
  (clonestrings) => clonestrings.indexOf("is") !== -1
)

// - Check if all the numbers in numbers array are divisible by three use array method (every)

cloneNumbers.every((byThree) => {
  return byThree % 3 === 0;
});

// -  Sort Array from smallest to largest

cloneNumbers.sort((a, b) => {
  return a -b;
})

// - Remove the last word in strings

cloneStrings.pop();

// - Find largest number in numbers

cloneNumbers.

// - Find longest string in strings

// - Find all the even numbers

cloneNumbers.filter(function(value){
  return value % 2 === 0;
})

// - Find all the odd numbers

cloneNumbers.filter(function(value){
  return value % 2 !== 0;
})

// - Place a new word at the start of the array use (unshift)

cloneStrings.unshift("New");

// - Make a subset of numbers array [18,9,7,11]

cloneNumbers.slice(3,7);

// - Make a subset of strings array ['a','collection']

cloneStrings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word



// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let filterCustomer = customers.filter((customer) =>
customer.firstname.startsWith("J")
);

// - Create new array with only first name

let firstNameCustomer = customers.map((customer) =>
customer.firstname
);

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
