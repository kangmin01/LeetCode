/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;

    let cnt = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            cnt++;
            if (i === 0) {
                cnt++;
            }
            if (i === flowerbed.length - 1) {
                cnt++;
            }
        } else {
            console.log(cnt)
            if (cnt >= 3) {
                n = n - (Math.floor((cnt - 1) / 2))
                if (n === 0) {
                    return true
                }
            }
            cnt = 0;
        }
    }

    if (cnt >= 0) {
        n = n - (Math.floor((cnt - 1) / 2))
        if (n === 0) {
            return true
        }
    }

    return n <= 0 ? true : false
};