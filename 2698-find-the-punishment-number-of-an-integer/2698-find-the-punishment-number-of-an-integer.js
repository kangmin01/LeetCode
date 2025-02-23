// /**
//  * @param {number} n
//  * @return {number}
//  */
// var punishmentNumber = function (n) {
//     let res = 0;

//     for (let i = 1; i <= n; i++) {
//         const sqaure = i * i;
//         const numStr = sqaure.toString()
//         const len = numStr.length;
//         console.log("===")

//         for (let j = 0; j < Math.pow(2, len - 1); j++) {
//             let temp = [];
//             let sum = 0;
//             let part = "";

//             for (let k = 0; k < len; k++) {
//                 part += numStr[k];
//                 if (((j >> k) & 1) || k === len - 1) {
//                     temp.push(part);
//                     part = "";
//                 }
//             }

//             sum = temp.reduce((a, b) => +a + +b)
//             // console.log(temp,sum,i)

//             if (Number(sum) === i) {
//                 res += sqaure;
//                 break;
//             }
//         }
//     }

//     return res;
// };

// 재귀 함수: 문자열의 특정 인덱스에서 시작하여, 현재까지의 합(currentSum)을 이용해 target과 맞출 수 있는지 판단합니다.
function canPartitionMemo(stringNum, target, index, currentSum, memo) {
  // 문자열의 끝에 도달하면 현재 누적합이 target과 동일한지 확인합니다.
  if (index === stringNum.length) {
    return currentSum === target;
  }

  // 현재 상태(인덱스, 누적합)를 key로 하여 메모이제이션 체크
  const key = index + ',' + currentSum;
  if (memo.hasOwnProperty(key)) {
    return memo[key];
  }

  let partition = "";
  // 가능한 모든 분할 조합을 시도합니다.
  for (let j = index; j < stringNum.length; j++) {
    partition += stringNum[j];
    const num = parseInt(partition, 10);
    // 현재 누적합에 더한 값이 target을 초과하면 더 이상의 분할은 의미가 없습니다.
    if (currentSum + num > target) break;
    if (canPartitionMemo(stringNum, target, j + 1, currentSum + num, memo)) {
      memo[key] = true;
      return true;
    }
  }
  memo[key] = false;
  return false;
}

// 메인 함수: 1부터 n까지 각 숫자에 대해 조건을 검사하고, 해당 제곱을 누적합니다.
function punishmentNumberMemo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    const s = square.toString();
    // 각 숫자마다 새로운 memo 객체를 초기화합니다.
    const memo = {};
    if (canPartitionMemo(s, i, 0, 0, memo)) {
      result += square;
    }
  }
  return result;
}
