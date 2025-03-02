/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && nums[i] === nums[i + 1]) {
            res.push(nums[i] * 2)
            i++;
        } else {
            if (nums[i] !== 0) {
                res.push(nums[i])
            }
        }
    }

    while (res.length < nums.length) {
        res.push(0)
    }

    return res
};