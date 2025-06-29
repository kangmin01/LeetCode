/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const map1 = new Map();
    word1.split("").forEach((elem) => map1.set(elem, (map1.get(elem) || 0) + 1));

    const map2 = new Map();
    word2.split("").forEach((elem) => map2.set(elem, (map2.get(elem) || 0) + 1));

    const keys1 = [...map1.keys()].sort()
    const keys2 = [...map2.keys()].sort()

    const values1 = [...map1.values()].sort()
    const values2 = [...map2.values()].sort()

    return JSON.stringify(keys1) === JSON.stringify(keys2) && JSON.stringify(values1) === JSON.stringify(values2)
};