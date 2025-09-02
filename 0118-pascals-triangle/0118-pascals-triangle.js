/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1], [1, 1]];
    }
    const arr = [[1], [1, 1]];


    for (let i = 2; i < numRows; i++) {
        const lastRow = arr[arr.length - 1];
        const sumRow = [1];
        for (let j = 0; j < lastRow.length - 1; j++) {
            sumRow.push(lastRow[j] + lastRow[j + 1])
        }
        sumRow.push(1)
        arr.push(sumRow)
    }

    return arr;
};