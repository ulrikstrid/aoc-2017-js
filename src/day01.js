// @flow

function solve(str: string) {
  return str.split("").reduce(
    (acc, curr, index, arr) => {
      if (acc.last === "") {
        if (arr[arr.length - 1] === curr) {
          return { last: curr, value: acc.value + parseInt(curr, 10) };
        }
        return { last: curr, value: 0 };
      }

      if (acc.last === curr)
        return {
          last: curr,
          value: acc.value + parseInt(curr, 10)
        };

      return { last: curr, value: acc.value };
    },
    { last: "", value: 0 }
  ).value;
}

export default solve;
