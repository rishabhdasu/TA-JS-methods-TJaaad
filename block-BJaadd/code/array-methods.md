Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join` () method joins or concatenates all the values of two arrays and returns a string with the concanated values sperated by commas or a specified seperator thing.
- Parameter: Seperator(optional) is used to specify a character or string that will seperate the values inside the new string. The specified values are converted to strings if required.
- Return: A string will all the values of an array joined.
- Syntax: 
```js
join()
join(sperator)
```
- Example:
```js
let arr = ["Html","CSS","JavaScript"];
arr.join(); // "Html,CSS,JavaScript"
```
3. `flat` method is used to concatenate all the sub-arrays inside an array and returns a new array concatenated into specified depth.
- Parameters: depth(optional) specifies the depth level of the nested array to be flattened.
- Return: A new array with concatenated sub arrays.
- Syntax:
```js
flat()
flat(depth)
```
- Example:
```js
let arr = [1, 4, 23, [22, 19, [77, 23]]];
arr.flat(4); // [1, 4, 23, 22, 19, 77, 23]
```

4. `push` method used to add a new element at the end of the array and returns a new array.
- Parameters: element/s to be added at the end of the array.
- Return: The length of the new array of adding a new element.
- Syntax:
```js
push(element)
```
- Example:
```js
let arr = [1, 3, 5, 77, 67];
arr.push(23); // 7
arr // [1, 3, 5, 77, 67, 23]
```

5. `indexOf` method is used to finds the first index of the specified element inside an array or -1 if the specified element is  not present inside the array.
- Parameter: searchElement is the specified element to be searched inside an array. And, fromIndex(optional) is used to specify the index from the search should start from.
- Return: The index of the searched element.
- Syntax
```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```
- Example: 
```js
let arr = [836, 334, 3, 22, 67];
arr.indexOf(22); // 3
```
6. `lastIndexOf` method is similar to the the indexOf but it starts searching from the end of the array
- Parameter: searchElement is the specified element to be searched inside an array. And, fromIndex(optional) is used to specify the index from the search should start from.
- Return: The index of the searched element.
- Syntax
```js
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```
- Example: 
```js
let arr = [836, 334, 3, 22, 67, 22];
arr.lastIndexOf(22); // 5
```
7. `includes` method checks for the specified element if it is present insid the give array or not.
- Parameter: A search element which needs to be searched for. And, a optional fromIndex to specify from which index the search should start.
- Return: true if the searched is found inside the given array otherwise false.
- Syntax: 
```js
includes(searchElement)
includes(searchElement, fromIndex)
```
- Example:
```js
let arr = [1, 68, 36, 37, 33];
arr.includes(68); // true
arr.includes(23); // false
```
8. `reverse` method reverses a given array and returns a new array with the reversed index of the elements.
- Return: The reversed array which means the first element becomes the last and the last one becomes the first.
- syntax: 
```js
reverse()
```
- Example:
```js
let arr = [34, 78, 21, 99, 100];
arr.reverse(); // [100, 99, 21, 78, 34]
```
9. `every` method checks wether the given function passed inside the array passes the condtion given inside the function and returns the boolean value.
- Parameter: 
- A callback function which contains the condtion to be tested.
- An elemet to be processed insid the function.
- Return: true if the cb function returns the truthy value
- Syntax: 
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )
- Example:
```js
let arr = [12, 5, 8, 130, 44];
function small(element, index, array) {
  return element <= 5;
}
arr.every(small);   // false
```
10. `shift` method shifts the first element and returns the removed element.
- Syntax:
shift()
- Return: The removed element from the array.
- Example: 
```js
let arr = [34, 56, 42, 12];
arr.shift(); // 34
```
11. `splice` method is used 
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
