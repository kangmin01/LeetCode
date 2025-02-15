/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        const sqaure = i * i;
        const numStr = sqaure.toString()
        const len = numStr.length;

        for (let j = 0; j < Math.pow(2, len - 1); j++) {
            let temp = [];
            let sum = 0;
            let part = "";

            for (let k = 0; k < len; k++) {
                part += numStr[k];

                if (((j >> k) & 1) || k === len - 1) {
                    temp.push(part);
                    part = "";
                }
            }

            sum = temp.reduce((a, b) => +a + +b)
            // console.log(temp,sum,i)

            if (Number(sum) === i) {
                res += sqaure;
                break;
            }
        }
    }

    return res;
};