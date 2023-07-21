/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0;
  let res = [];
  nums.forEach((num, idx) => {
    if (num === 1) {
      cnt++;
      if (idx === nums.length - 1) {
        res.push(cnt);
      }
    } else {
      res.push(cnt);
      cnt = 0;
    }
  });

  return Math.max(...res);
};