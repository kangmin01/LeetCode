/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let result = false;
    let read = 0;

    if (s.length === 0) return true;

    for (let i = 0; i < t.length; i++) {
        console.log(s[read],t[i])
        if (t[i] === s[read]) {
            read++;
        }

        if (read === s.length && read !== 0) {
            return true;
        }
    }

    return result;
};