/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const arr = [...nums];
    let std = 0;

    for(let i=0; i <nums.length; i++) {
        if(arr[i] === 0) {
            nums.splice(std,1)
            nums.push(0)
        } else {
            std++;
        }
    }
};