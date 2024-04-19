import findLongestString from "./findLongest";

const floatNum = (num: number, result: string) => {
  let numStr: string = num.toString();
  const decimalIndex = numStr.indexOf(".");

  const valueArr = result.split("+" || "-" || "÷" || "×");
  const longestDecimalIndex = findLongestString(valueArr).indexOf(".");
  console.log(longestDecimalIndex);
  console.log(findLongestString(valueArr));
  const fixedNum =
    findLongestString(valueArr).slice(longestDecimalIndex).length - 1;
  console.log(fixedNum);
  if (decimalIndex === -1) return num;

  for (let i = decimalIndex + 1; i < numStr.length; i++) {
    if (Number(numStr[i]) === 0) {
      return num.toFixed(fixedNum);
    }
  }
  return num;
};

export default floatNum;
