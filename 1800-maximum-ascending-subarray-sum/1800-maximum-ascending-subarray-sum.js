/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let total = nums[0];
    let res = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            total += nums[i]
        } else {
            res = Math.max(total, res)
            total = nums[i]
        }
    }

    res = Math.max(total, res)
    return res;
};