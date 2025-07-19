/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    s = s.split("");
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === "*") {
            if (s[i] === "*") {
                result.pop()
            } 
        } else {
            if (s[i] !== "*") {
                result.push(s[i])
            }
        }
    }

    return result.join("")
};