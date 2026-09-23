type SquareNumber = {
  number: number;
  square: number;
};

function getSquareNumbers(numbers: number[]): SquareNumber[] {
  return numbers.map((number): SquareNumber => {
    return {
      number: number,
      square: number * number,
    };
  });
}
