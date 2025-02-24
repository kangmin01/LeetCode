/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    let res = 0;
    const map = new Map()
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let num = map.get(nums[i] * nums[j])
            if (num > 0) {
                map.set(nums[i] * nums[j], num + 1)
            } else {
                map.set(nums[i] * nums[j], 1)
            }
        }
    }

    for(let i of map.values()) {
        if(i > 1) {
            res += (i*(i-1))/2 * 8
        }
    }

    return res;
};