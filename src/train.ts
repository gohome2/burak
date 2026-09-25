//---------N Task--------//

function palindromCheck(word: string): boolean {
  const reversedWord: string = word.split("").reverse().join("");

  return word === reversedWord;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false

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
