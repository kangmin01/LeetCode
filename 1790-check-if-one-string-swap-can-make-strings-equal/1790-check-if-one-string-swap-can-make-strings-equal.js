/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    const swap1 = [];
    const swap2 = [];
    let swap = 0;


    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            swap++;
            swap1.push(s1[i])
            swap2.push(s2[i])
        }
    }

    if ((swap === 2 || swap === 0) && swap1[0] === swap2[1] && swap1[1] === swap2[0]) {
        return true;
    } else {
        return false;
    }
};