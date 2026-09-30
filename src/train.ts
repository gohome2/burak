//---------P Task--------//
function objectToArray(obj: { [key: string]: unknown }): [string, unknown][] {
  const result: [string, unknown][] = [];
  const keys = Object.keys(obj);

  for (const key of keys) {
    const value = obj[key];
    result.push([key, value]);
  }

  return result;

  console.log(objectToArray({ a: 10, b: 20 }));
}

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

/**
 * Traditional API
 * Rest API
 * GraphQL
 * ...
 */
