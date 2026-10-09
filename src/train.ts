//---------T Task--------//
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const merged: number[] = [...arr1, ...arr2];

  return merged.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
//---------S Task--------//
// function missingNumber(numbers: number[]): number {
//   let fullSum = 0;
//   let arraySum = 0;

//   for (let i = 0; i <= numbers.length; i++) {
//     fullSum += i;
//   }

//   for (const number of numbers) {
//     arraySum += number;
//   }

//   return fullSum - arraySum;
// }

// console.log(missingNumber([3, 0, 1]));

//---------P Task--------//
// function calculate(text: string): number {
//   const parts = text.split("+");
//   let sum = 0;

//   for (const part of parts) {
//     sum += Number(part);
//   }

//   return sum;
// }

// console.log(calculate("1+3"));

//---------P Task--------//
// function hasProperty(obj: object, property: string): boolean {
//   return property in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

//---------P Task--------//
// function objectToArray(obj: { [key: string]: unknown }): [string, unknown][] {
//   const result: [string, unknown][] = [];
//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     const value = obj[key];
//     result.push([key, value]);
//   }

//   return result;

//   console.log(objectToArray({ a: 10, b: 20 }));
// }

//---------O Task--------//
// function calculateSumOfNumbers(values: unknown[]): number {
//   let sum = 0;

//   values.forEach((value) => {
//     if (typeof value === "number") {
//       sum = sum + value;
//     }
//   });

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45
//---------N Task--------//

// function palindromCheck(word: string): boolean {
//   const reversedWord: string = word.split("").reverse().join("");

//   return word === reversedWord;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

//
// type SquareNumber = {
//   number: number;
//   square: number;
// };

// function getSquareNumbers(numbers: number[]): SquareNumber[] {
//   return numbers.map((number): SquareNumber => {
//     return {
//       number: number,
//       square: number * number,
//     };
//   });
// }

/*  PROJECT STANDARTS

 - Logging standards    

 - Naming standards:                            
   function, method, variable => CAMEL case     -   goHome
   class => PASCAL                              -   MemberStatus
   folder => KEBAB                              -
   css class => SNAKE                           -   button_style

 - Error handling

*/

/**Request:
 * Traditional API
 * Rest API
 * GraphQL
 * ...
 */

/**Frontend Development:
 * Traditional (FD) => SSR (Admin) => EJS framework
 * Modern (FD)      => SPA  (User application) => (.json) REACT(Library)
 *
 * Frontend Development=(FD)
 */

/* Cookies:
request join
self destroy
*/

/* Validation:

Frontend validation 
Backend validation 
Database validation 

*/
