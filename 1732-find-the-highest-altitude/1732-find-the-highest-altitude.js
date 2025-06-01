/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    const res = [0];

    for (let i = 0; i < gain.length; i++) {
        const point = res[i]
        res.push(point + gain[i])
    }

    return Math.max(...res)
};