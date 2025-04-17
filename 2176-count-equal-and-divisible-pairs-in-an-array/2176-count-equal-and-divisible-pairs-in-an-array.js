/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const val = map.get(nums[i])
        if (val) {
            val.push(i)
            map.set(nums[i], val)
        } else {
            map.set(nums[i], [i])
        }
    }

    let cnt = 0;
    for (let [key, value] of map) {
        if (value.length >= 2) {
            for (let i = 0; i < value.length; i++) {
                for (let j = i + 1; j < value.length; j++) {
                    if (value[i] * value[j] % k === 0) {
                        cnt++;
                    }
                }
            }
        }
    }
    return cnt;
};