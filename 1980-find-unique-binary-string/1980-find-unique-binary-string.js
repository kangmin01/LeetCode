/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const len = nums[0].length;


    for (let i = 0; i < Math.pow(2, len); i++) {
        const str = (i.toString(2).padStart(len, '0'))

        if (!nums.includes(str)) {
            return str;
        }
    }
};