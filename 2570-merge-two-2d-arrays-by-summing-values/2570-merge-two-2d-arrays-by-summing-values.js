/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map();

    for (let [id, value] of nums1) {
        map.set(id, (map.get(id) || 0) + value)
    }
    for (let [id, value] of nums2) {
        map.set(id, (map.get(id) || 0) + value)
    }

    return [...map].sort((a, b) => a[0] - b[0])
};