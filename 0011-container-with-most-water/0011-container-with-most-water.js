/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let start = 0;
    // let end = 1;
    // let res = 0;

    // while (end <= height.length - 1) {
    //     res = Math.max(res, (end - start) * Math.min(height[start], height[end]));
    //     if (height[start] < height[end]) {
    //         start = end;
    //     }
    //     end++;
    // }
    // return res;
    let start = 0;
    let end = height.length - 1;
    let res = 0;

    while (start < end) {
        res = Math.max(res, (end - start) * Math.min(height[start], height[end]));
        if (height[start] < height[end]) {
            start++
        } else {
            end--;
        }
    }
    return res;
};