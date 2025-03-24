/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const splitArr = s.trim().split(" ").filter(x => x !== "")

    let res = "";
    for (let i = splitArr.length - 1; i >= 0; i--) {
        res = res + splitArr[i] + " "
    }

    return res.trim()
};