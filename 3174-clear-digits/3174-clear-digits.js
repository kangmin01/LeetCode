/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let str = s.split('')
    let eng = [];

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            str[i] = "+"
            if (eng.length >= 0) {
                str[eng[eng.length - 1]] = "+"
                eng.pop()
            }
        } else {
            eng.push(i)
        }
    }

    return str.filter((x) => x !== "+").join('')
};