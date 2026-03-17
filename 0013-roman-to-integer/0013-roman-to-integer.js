/**
 * @param {string} s
 * @return {number}
 */

const Obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let total = 0;

    const splitRoman = s.split('');
    splitRoman.forEach((item, index) => {
        if(Obj[item] >= Obj[splitRoman[index + 1]] || !Obj[splitRoman[index + 1]]) {
            total += Obj[item];
        } else {
            total -= Obj[item];
        }
    })

    return total;
};