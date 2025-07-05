/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let start = 0;
    let end = start + k - 1;
    let sum = nums.slice(0, end + 1).reduce((acc, curr) => acc + curr);
    let maxAvg = -Infinity;

    while (end <= nums.length - 1) {
        if (start !== 0) {
            sum = sum + nums[end] - nums[start - 1]
        }
        const avg = sum / k
        maxAvg = Math.max(maxAvg, avg)
        start++;
        end++;
    }

    return maxAvg;
};