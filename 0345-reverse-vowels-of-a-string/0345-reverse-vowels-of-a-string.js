/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const vowelsArr = []
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelsArr.push(s[i])
        }
    }

    const strArr = s.split("")
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(strArr[i].toLowerCase())) {
            strArr[i] = vowelsArr.pop()
        }
    }

    return strArr.join("")
};