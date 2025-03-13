/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
//  길이가 6이라면 가질 수 있는 문자열의 길이는 1, 2, 3, 6이다. 
var gcdOfStrings = function (str1, str2) {
    const min = Math.min(str1.length, str2.length);
    let str = "";
    let res = "";

    for (let i = 1; i <= min; i++) {
        str += str1[i-1];
        if (str1.length % i === 0 && str2.length % i === 0) {
            // console.log(i)
            const s1 = str1.split(str)
            const s2 = str2.split(str)
            // console.log(s1,s2)
            const r1 = s1.filter(item => item !== "")
            const r2 = s2.filter(item => item !== "")
            if(r1.length === 0 && r2.length === 0) {
                res = str
            }
        }
    }

    return res ?? ""
};