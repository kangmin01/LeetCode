/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const leftSumArr = [];
    const rightSumArr = [];

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i]
        leftSumArr.push(leftSum)

        rightSum += nums[nums.length - i - 1]
        rightSumArr.unshift(rightSum)
    }

    for (let i = 0; i < nums.length; i++) {
        if ((leftSumArr[i - 1] || 0) === (rightSumArr[i + 1] || 0)) {
            return i
        }
    }
    return -1
};