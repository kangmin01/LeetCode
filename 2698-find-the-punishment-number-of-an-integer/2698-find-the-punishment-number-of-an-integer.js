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

function punishmentNumber(n) {
    function canPartition(num, target, start) {
        if (target === 0 && start === num.length) return true;
        if (start >= num.length) return false;
        
        let sum = 0;
        for (let i = start; i < num.length; i++) {
            sum = sum * 10 + parseInt(num[i], 10);
            if (sum > target) break;
            if (canPartition(num, target - sum, i + 1)) return true;
        }
        
        return false;
    }
    
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        let squareStr = (i * i).toString();
        if (canPartition(squareStr, i, 0)) {
            totalSum += i * i;
        }
    }
    
    return totalSum;
}
