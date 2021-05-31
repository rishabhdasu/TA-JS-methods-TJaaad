Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 - Return: It returns a new string by converting the called string into upper case.
 - TypeError: It throws an Type error when it used to call a 'null' or 'undefined'.
 - Syntax: toUpperCase();
 - Example:
 ```js
 let example = "I am learning full-stack web development at AltCampus";
 console.log(example.toUpperCase()); //I AM LEARNING FULL-STACK WEB DEVELOPMENT AT ALTCAMPUS
 ```
 - `toUpperCase` converts a called string into uppercase and returns the converted string into a new string.

3. `toLowerCase`
 - Return: It returns a new string by converting the called string into lower case.
 - TypeError: It throws an Type error when it used to call a 'null' or 'undefined'.
 - Syntax: toLowerCase();
 - Example:
 ```js
 let example = "I am learning full-stack web development at AltCampus";
 console.log(example.toLowerCase()); //i am learning full-stack web development at altcampus
 ```
 - `toLowerCase` converts a called string into lower case and returns the converted string into a new string.

4. `trim`
- Return: It returns a new string by removing all the white spaces from the start and the end of the called string.
- Syntax: trim()
- Example:
```js
let example = "      AltCampus  ";
console.log(example) // "      AltCampus  "
console.log(example.trim()); // AltCampus
```
- `trim` method is used to remove any white spaces from the start and the end of any called strings.

5. `trimEnd`
- Return: It returns a new string by removing all the white spaces only from the end of the called string.
- Syntax: trimEnd()
- Example:
```js
let example = "      AltCampus  ";
console.log(example) // "      AltCampus  "
console.log(example.trimEnd()); // "      AltCampus"
```
- `trimEnd` method is used to remove any white spaces only from the end of any called strings.

6. `trimStart`
- Return: It returns a new string by removing all the white spaces only from the start of the called string.
- Syntax: trimStart()
- Example:
```js
let example = "      AltCampus  ";
console.log(example) // "      AltCampus  "
console.log(example.trimStart()); // "AltCampus  "
```
- `trimStart` method is used to remove any white spaces only from the start of any called strings.

7. `concat`
- Parameters: It accepts one or more strings as parameters to concatenate to the called string.
- Return: It returns a new string with the concatenated strings into the called string.
- Syntax: concat(str1)
          concat(str1, str2)
          concat(str1, str2, str3, ...., strN)
- Example:
```js
let exampleA = "Alt";
let exampleB = "Campus";
console.log(exampleA.concat(exampleB)); // "AltCampus"
```
- `concat` method is used to concatenate two or more strings arguments into a given string and returns a new string. And, if the arguments are not the type of a string, they are converted to a string value before concatenating.

8. `endsWith`
- Parameters: 
- searchString: It searches for the end of the string.
- Length: It is used as the lenght of the string, if provided.
- Return: If the given characters are found at the end of the string then it returns true otherwise false.
- Syntax: endsWith(searchstring)
          endsWith(searchstring, length) 
- Example:
```js
let example = "I am learning web development at AltCampus";
example.endsWith('Campus'); // true
example.endsWith('web'); // false
example.endsWith(`web`, 17); // true
```
- `endsWith` method checks wether the passed attributes matches the end of the called string and returns true if it matches otherwise false.

9. `includes`
- Parameters: 
- searchString to search the character in the called string.
- postion(optional): Checks the character at the passed postion in the string and if no position is passed it defaults to 0
- Return: true if the passed character is found inside the called string otherwise false.
- Syntax: Syntax: includes(searchstring)
          includes(searchstring, postion) 
- Example:
```js
let example = "Check the string";
example.includes('c'); // true
example.includes('c', 5); // false
```
- `includes` searches the passed character inside the called string and return true if found otherwise false.

10. `indexOf` Searches for the character passed inside the called string and returns the index of the first occurance of that charcter inside the string.
- Parameter: 
- Search Value: Search the passed character inside the called string.
- fromIndex: An integer to search the value from the index of the integer.
- Return: The index value of the passed character or -1 if nothing is passed.
- Syntax: indexOf(searchValue)
indexOf(searchValue, fromIndex)
- Example: 
```js
let example = "I am learning full-stack web development at AltCampus";
example.indexOf(`web`); // 25
example.indexOf(`web`, 26); // -1 
```
11. `lastIndexOf`  Searches for the character passed inside the called string and returns the index of the last occurance of that charcter inside the string.
- Parameter: 
- Search Value: Search the passed character inside the called string.
- fromIndex: An integer to search the value from the index of the integer.
- Return: The index value of the passed character or -1 if nothing is passed.
- Syntax: lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
- Example: 
```js
let example = "I am learning full-stack web development at AltCampus";
example.lastIndexOf(`web`);  // -1
example.lastIndexOf(`web`, 26); // 25
```
12. `padEnd` pads the called string with the passed string(optional) at the end of the string and returns the padded string with the new length passed inside it.
- Parameter:
- targetlength: The passed length defines the size of the new string and adds the amount of padding required to reach the passed length.
- padded string - If provided any, the passed string is padded with the called string to reach the given length.
- Return: A new string with the specified passed length and the padded string if provided at the end of the called string.
- Example:
```js
let example = "AltCampus";
example.padEnd(13); // "AltCampus    "
example.padEnd(13, "s"); // "AltCampusssss"
```

13. `padStart`
`padEnd` pads the called string with the passed string(optional) at the start of the string and returns the padded string with the new length passed inside it.
- Parameter:
- targetlength: The passed length defines the size of the new string and adds the amount of padding required to reach the passed length.
- padded string - If provided any, the passed string is padded with the called string to reach the given length.
- Return: A new string with the specified passed length and the padded string if provided at the start of the called string.
- Example:
```js
let example = "AltCampus";
example.padStart(13); // "    AltCampus"
example.padStart(13, "A"); // "AAAAAltCampus"
```

14. `repeat` method is is used to repeat the called string by the specied number of times and returns a new string.
- Parameter: Count is specied inside the parameter to specify the number of repetitons required.
- Return: A new string with specified number of copies passed.
- Syntax: repeat(count)
- Example: 
```js 
let example = "Learner";
example.repeat(5); // "LearnerLearnerLearnerLearnerLearner"
```
15. `replace` method replaces a given string or character with a new string or character passed inside it.
- Parameters: 
- substring: The one which needs to be replaced
- newstring: The one which is replaced
- Return: the new string with the replaced value
- Syntax: replace(substr, newSubstr)
replace(substr, replacerFunction)
- Example:
```js
let example = "College";
example.replace("College","AltCampus"); // "AltCampus"
```
16. `slice` method slices the section of a string and returns a new string.
- Parameter: 
- beginIndex: Defines where to begin extraction.
- endIndex: Defines where to end the extraction.
- Return: A new string with the sliced values.
- Syntax: slice(beginIndex)
slice(beginIndex, endIndex)
- Example: 
```js
let example = "I love AltCampus"; 
example.slice(2,); // "love AltCampus"
example.slice(2, 6); // "love"
```
17. `split` method splits the strings or characters and returns a ordered list of substrings by matching the pattern provided in the parameter.
- Parameter: If provided, a seperator is used to define where the strings are to be seperated.
- Limit: Specifies the limit of the substrings.
- Return: An array of strings splitted.
- Syntax: split()
split(separator)
split(separator, limit)
- Example: 
```js 
let example = "I am learning full-stack web development at AltCampus";
example.split("l", 5); // ["I am ", "earning fu", "", "-stack web deve", "opment at A"]
```

18. `substring` returns the part of the string between the start and end indexes, or to the end of the string.
- Parameter: 
- indeStart: index of the first character to be included in the return value
- indexEnd(optional): index of the last character to be excluded from the return value
- Return: A new string with the speciefied part of the given string.
- Syntax: substring(indexStart)
substring(indexStart, indexEnd)
- Example:
```js
let example = "I am learning web development"; 
example.substring(2, 13); // "am learning"
```