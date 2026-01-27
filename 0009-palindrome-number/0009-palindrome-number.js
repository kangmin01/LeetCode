/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    const str = x.toString();
    const len = str.length;
    const half = Math.floor(len / 2);

    for (let i = 0; i < half; i++) {
        if(str[i] !== str[len-1-i]) {
            return false;
        }
    }

    return true;
};