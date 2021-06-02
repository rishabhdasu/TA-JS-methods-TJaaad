let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map(people => people.name);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map(people => people.grade);

// Create an array peopleSex and store the value of sex key from persons array

let peopleName = persons.map(people => people.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

function filtStart(f){
   return f.startsWith("J") ||  f.startsWith("P");
}

console.log(peopleName.filter(filtStart));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

function filtStart(f){
  return f.startsWith("J") ||  f.startsWith("P");
}

console.log(peopleName.filter(filtStart.length));

// Log all the filtered male ('M') in persons array

function male(sex){
  return sex == "M";
}
let sex1 = peopleSex.filter(male);

// Log all the filtered female ('F') in persons array

function female(sex){
  return sex == "F";
}
let filteredFemale = peopleSex.filter(female);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let filteredF = filteredFemale.filter(sex => filteredFemale.startsWith("C") ||  filteredFemale.startsWith("J"));

// Log all the even numbers from peopleGrade array

let evenFilter = persons.map(num => {if(num.grade % 2 === 0){ return num.grade}});
console.log(evenFilter);

// Find the first name that starts with 'J' in persons array and log the object

console.log(persons.name.startsWith("J"));

// Find the first name that starts with 'P' in persons array and log the object

console.log(persons.name.startsWith("P"));

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(persons.name.startsWith("P"));

// Filter all the female from persons array and store in femalePersons array

let femalePersons = [...persons].filter(fem => {if(fem.sex === "F"){return fem.name}});

// Filter all the male from persons array and store in malePersons array

let malePersons = [...persons].filter(fem => {if(fem.sex === "M"){return fem.name}});

// Find the sum of all grades and store in gradeTotal

let gradess = persons.map(grade => grade.grade);

let gradeTotal = gradess.reduce((total, value) => {return total + value},0 );

// Find the average grade

let gradeAvg = gradeTotal / gradess.length;

// Find the average grade of male

let gradessM = malePersons.map(grade => grade.grade);

let gradeMaleTotal = gradessM.reduce((total, value) => {return total + value},0 );

let gradeMaleAvg = gradeMaleTotal / gradessM.length;


// Find the average grade of female

let gradessF = femalePersons.map(grade => grade.grade);

let gradeFemaleTotal = gradessF.reduce((total, value) => {return total + value},0 );

let gradeFemaleAvg = gradeFemaleTotal / gradessF.length;

// Find the highest grade

let highestG = [...peopleGrade].sort((a,b) => a - b).pop();

// Find the highest grade in male

let highestMaleG = [...gradessM].sort((a,b) => a - b).pop();

// Find the highest grade in female

let highestFemaleG = [...gradessF].sort((a,b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'



// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

let sortGrade = peopleGrade.sort((a, b) => a -b);

```Yes, the peopleGrade changed into a new sorted array```

// Sort the peopleGrade in descending order

let sortGrade = peopleGrade.sort((a, b) => b -a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let sortGrade = [...peopleGrade].sort((a, b) => a -b);

// Sort the array peopelName in ascending `ABCD..Za....z`

let sortName = peopelName.sort((a,b) => a - b);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let sortName = [...peopelName].sort((a,b) => a - b);
