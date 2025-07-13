function equalPairs(grid) {
  const n = grid.length;
  const colMap = new Map();

  // 열들을 문자열로 저장
  for (let j = 0; j < n; j++) {
    const col = [];
    for (let i = 0; i < n; i++) {
      col.push(grid[i][j]);
    }
    const colKey = col.join(',');
    colMap.set(colKey, (colMap.get(colKey) ?? 0) + 1);
  }

  // 각 행을 문자열로 만들어서 colMap에 있는지 확인
  let result = 0;
  for (let i = 0; i < n; i++) {
    const rowKey = grid[i].join(',');
    result += colMap.get(rowKey) ?? 0;
  }

  return result;
}
