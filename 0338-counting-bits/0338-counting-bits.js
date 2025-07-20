/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const res = [];

    for (let i = 0; i <= n; i++) {
        const bits = i.toString(2).split("").reduce((a, c) => +a + +c)
        res.push(+bits)
    }

    return res;
};