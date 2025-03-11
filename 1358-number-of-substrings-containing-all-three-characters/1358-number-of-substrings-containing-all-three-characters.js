/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let start = 0;
    let end = -1;

    let cnt = 0;
    let stack = [];

    while (start < s.length - 2) {
        if (stack.indexOf('a') > -1 && stack.indexOf('b') > -1 && stack.indexOf('c') > -1) {
            cnt += s.length - end
            start++;
            stack.shift()
            continue;
        }

        if (end === s.length - 1) {
            stack.shift()
            start++;
        } else {
            end++;
            stack.push(s[end])
        }
    }

    return cnt;
};

// 이중for문 없이 푸는 방법이 뭘까.......................................................
// 슬라이딩 윈도우, 너 뭔데
// 맽 : 꼭 문자열을 다 찾아야만 하는걸까? 