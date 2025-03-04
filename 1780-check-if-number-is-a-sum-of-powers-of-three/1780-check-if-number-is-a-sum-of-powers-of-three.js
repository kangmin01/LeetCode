/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {


    while (n > 1) {
        if (n % 3 === 0) {
            n = n / 3
        } else if (n % 3 === 1) {
            n = n - 1
        } else {
            return false;
        }
    }
    console.log(n)
    return n === 1 ? true : false;
};