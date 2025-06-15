/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set();
    const set2 = new Set();

    for (let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        set2.add(nums2[i])
    }

    const arr1 = [...set1].filter((item) => !nums2.includes(item))
    const arr2 = [...set2].filter((item) => !nums1.includes(item))

    return [arr1, arr2]
};