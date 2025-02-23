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

function canPartition(s, target, index = 0, memo = {}) {
  if (index === s.length) return target === 0;
  let key = `${index},${target}`;
  if (memo.hasOwnProperty(key)) return memo[key];
  
  let num = 0;
  // index부터 시작하여 가능한 모든 숫자를 만들며 분할 시도
  for (let j = index; j < s.length; j++) {
    num = num * 10 + parseInt(s[j]);
    if (num > target) break; // 목표를 초과하면 더 진행할 필요 없음.
    if (canPartition(s, target - num, j + 1, memo)) {
      memo[key] = true;
      return true;
    }
  }
  
  memo[key] = false;
  return false;
}

function punishmentNumber(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    const numStr = square.toString();
    // 재귀를 통한 분할 탐색
    if (canPartition(numStr, i)) {
      res += square;
    }
  }
  return res;
}
