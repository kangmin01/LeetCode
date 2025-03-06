/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let s = [0]
    while (s.length < k) {
        const n = s.length
        for (let i = 0; i < n; i++) {
            s[n + i] = (s[i] + 1) % 26
        }
    }
    // console.log(s)
    return String.fromCharCode(s[k - 1] + 97)
    // let str = "a";

    // function getNextString(str) {
    //     let strArr = str.split("");
    //     let nextCodes = strArr.map((item) => {
    //         const code = item.charCodeAt();
    //         if (code === 122) {
    //             return 97
    //         }
    //         return code + 1;
    //     })
    //     let nextArr = nextCodes.map((item) => String.fromCharCode(item))
    //     return str + nextArr.join("")
    //     // return str += nextArr.join("")
    // }

    // function recursion(k) {
    //     if (str[k]) {
    //         return str[k-1]
    //     } else {
    //         str = getNextString(str)
    //         // 반환하지 않았다!
    //         return recursion(k)
    //     }
    // }


    // return recursion(k)
};