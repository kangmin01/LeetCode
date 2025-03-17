/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    if (nums.length % 2 !== 0) {
        return false
    }

    const map = new Map();
    nums.forEach((num) => {
        if (map.get(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })

    for (let num of map.values()) {
        if (num % 2 !== 0) {
            return false
            break;
        }
    }

    return true
};