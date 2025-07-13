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

    // (1)
    // const rows = grid.map(arr => arr.join())
    // const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
    // let count = 0
    // for (let row of rows) {
    //     for (let column of columns) {
    //         if (row === column) count++
    //     }
    // }
    // return count

    // (2)
      const n = grid.length
    let count = 0
    const rows = new Map()

    for(let r = 0; r < n; r++){
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
    }

    for(let c = 0; c < n; c++){
        const col = JSON.stringify(grid.map(row => row[c]))
        count += (rows.get(col) || 0)
    }
    
    return count
};