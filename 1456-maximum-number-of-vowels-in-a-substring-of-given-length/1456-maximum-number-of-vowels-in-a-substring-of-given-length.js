/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    s = s.toString();
    let subStr = 0;
    let cnt = 0;
    let res = 0;

    while (subStr !== k) {
        if (isVowel(s[subStr])) {
            cnt++;
        }
        subStr++;
    }

    res = Math.max(res, cnt);

    for (let i = subStr; i < s.length; i++) {
        if (isVowel(s[i])) {
            cnt += 1;
        }
        if (isVowel(s[i-k])) {
            cnt -= 1;
        } 
        res = Math.max(res,cnt)
    }

    return res;
};

function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char)
}