/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let str = "a";

    function getNextString(str) {
        let strArr = str.split("");
        let nextCodes = strArr.map((item) => {
            const code = item.charCodeAt();
            if (code === 122) {
                return 97
            }
            return code + 1;
        })
        let nextArr = nextCodes.map((item) => String.fromCharCode(item))
        return str + nextArr.join("")
        // return str += nextArr.join("")
    }

    function recursion(k) {
        if (str[k]) {
            return str[k-1]
        } else {
            str = getNextString(str)
            return recursion(k)
        }
    }


    return recursion(k)
};