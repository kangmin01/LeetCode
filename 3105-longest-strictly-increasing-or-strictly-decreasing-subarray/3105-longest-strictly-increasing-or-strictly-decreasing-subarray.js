/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let inc = 1;
    let dec = 1;
    let res = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            inc++;
        } else {
            res = Math.max(res, inc)
            inc = 1;
        }
        res = Math.max(res, inc)
    }

    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i - 1] > nums[i])
        if (nums[i - 1] > nums[i]) {
            dec++;
        } else {
            res = Math.max(res, dec)
            dec = 1;
        }
        res = Math.max(res, dec)
    }

    return res;
};