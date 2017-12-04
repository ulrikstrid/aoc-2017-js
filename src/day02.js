function solve(spreadsheet: number[][]): number {
  return spreadsheet.reduce((acc, curr) => {
    const currMax = Math.max.apply(Math, curr);
    const currMin = Math.min.apply(Math, curr);

    const currDifference = currMax - currMin;

    return acc + currDifference;
  }, 0);
}

export default solve;
