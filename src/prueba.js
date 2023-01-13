let ArrayToSum = [1, 2, 4, 5, 6, 7, 8, 9];
const recursiveSum = (ArrayToSum) => {
  return ArrayToSum.length === 1
    ? ArrayToSum[0]
    : ArrayToSum.pop(0) + recursiveSum(ArrayToSum);
};

console.log(recursiveSum(ArrayToSum));