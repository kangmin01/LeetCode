/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const sortedNums = [...nums].sort((a,b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        if(JSON.stringify(nums) === JSON.stringify(sortedNums)) return true;
        const lastItem = nums.pop();
        nums.unshift(lastItem);
    }
    return false;
};