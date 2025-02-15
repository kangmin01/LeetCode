/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let sumOfDigits = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i].toString().split('')
        const sum = num.reduce((a, b) => +a + +b)
        if (sumOfDigits[sum]) {
            sumOfDigits[sum].push(nums[i])
        } else {
            sumOfDigits[sum] = [nums[i]]
        }
    }

    let res = -1;
    for (const [key, value] of Object.entries(sumOfDigits)) {
        if (value.length >= 2) {
            const sorted = value.sort((a, b) => b - a)
            res = Math.max(res, sorted[0] + sorted[1])
        }
    }

    return res;
};