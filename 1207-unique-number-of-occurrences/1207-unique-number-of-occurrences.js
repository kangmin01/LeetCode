/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();
    arr.forEach((elem) => {
        let val = map.get(elem);
        if (val) {
            map.set(elem, val + 1)
        } else {
            map.set(elem, 1)
        }
    })

    const values = [...map.values()]
    const arrLen = values.length;
    const set = new Set(values);

    return arrLen === set.size ? true : false
};