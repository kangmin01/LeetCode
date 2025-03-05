/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let res = 0;

    while (n > 1) {
        res += 4*(n-1)
        n--
    }

    return res + 1
};