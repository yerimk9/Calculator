// 배열에서 가장 긴 문자열을 찾는 함수
const findLongestString = (arr: string[]) => {
  let longest = arr[0]; // 일단 첫 번째 요소를 가장 긴 것으로 설정
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};

export default findLongestString;
