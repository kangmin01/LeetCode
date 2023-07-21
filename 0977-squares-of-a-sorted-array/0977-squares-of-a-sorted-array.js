/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map((num) => Math.pow(num, 2));
    return nums.sort((a, b) => a - b);
};