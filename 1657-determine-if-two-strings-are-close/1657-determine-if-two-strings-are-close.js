/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // if (word1.length !== word2.length) return false;

    // const map1 = new Map();
    // word1.split("").forEach((elem) => map1.set(elem, (map1.get(elem) || 0) + 1));

    // const map2 = new Map();
    // word2.split("").forEach((elem) => map2.set(elem, (map2.get(elem) || 0) + 1));

    // const keys1 = [...map1.keys()].sort()
    // const keys2 = [...map2.keys()].sort()

    // const values1 = [...map1.values()].sort()
    // const values2 = [...map2.values()].sort()

    // return JSON.stringify(keys1) === JSON.stringify(keys2) && JSON.stringify(values1) === JSON.stringify(values2)
        let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
};