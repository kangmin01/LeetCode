/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const map = new Map();
    const arr = grid.flat()
    const res = []

    arr.forEach((item) => {
        const cnt = map.get(item)
        if (cnt > 0) {
            res[0] = item
        }
        map.set(item, 1)
    })

    for (let i = 1; i <= arr.length; i++) {
        if(!map.has(i)) {
            res[1] = i
        }
    }

    return res
};