/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // const map = new Map();
    // // const columns = new Array(grid.length).fill("")

    // for (let i = 0; i < grid.length; i++) {
    //     const str = grid[i].join("");
    //     map.set(str, map.get(str) + 1 || 1)
    // }

    // // columns 배열 추출?해서 비교하려고 했는데 시간초과.
    const rows = grid.map(arr => arr.join())
    const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
    let count = 0
    for (let row of rows) {
        for (let column of columns) {
            if (row === column) count++
        }
    }
    return count
};