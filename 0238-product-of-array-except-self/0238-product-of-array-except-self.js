/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let num = 1;
    const arr1 = [];
    for (let i = 0; i < nums.length; i++) {
        num *= nums[i]
        arr1.push(num)
    }

    num = 1;
    const arr2 = []
    for (let i = nums.length - 1; i >= 0; i--) {
        num *= nums[i]
        arr2[i] = num
    }

    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ans[i] = arr2[i + 1]
        } else if (i === nums.length - 1) {
            ans[i] = arr1[i - 1]
        } else {
            ans[i] = arr1[i - 1] * arr2[i + 1]
        }
    }

    return ans
};
