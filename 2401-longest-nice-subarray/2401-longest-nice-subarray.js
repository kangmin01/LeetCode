/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let start = 0;
    let end = 0;
    let res = 0;

    while (end < nums.length) {
        end++;

        if ((nums[end] & nums[start]) === 0) {
            for (let i = start; i < end; i++) {
                if ((nums[i] & nums[end]) !== 0) {
                    res = Math.max(res, end - start)
                    i = end
                    start = end
                }
                if (end === nums.length) {
                    res = Math.max(res, end - start)
                }
            }
        } else {
            res = Math.max(res, end - start)
            start++;
            if (start !== end) {
                end -= 1
            }
        }
    }

    return res
};