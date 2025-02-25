/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    const map = new Map();
    const arr = new Map();
    const res = [];

    for (const [position, color] of queries) {
        let count=1; // Color 의 개수
        if(map.has(color)){
            let additionalCount=map.get(color);
            count+=additionalCount; // 기존에 존재하던 Color가 있으면 그 개수를 더해줌
        }
        map.set(color, count); // Color에 개수를 구함
        // 만일 현재 Position에 값이 채워져 있었다면 ?
        if(arr.has(position)){ // 값이 이미 채워져 있는 경우
            let originalColor=arr.get(position);
            let originalColorCount=map.get(originalColor);
            let reduceOriginalColor=originalColorCount-1;
            if(reduceOriginalColor==0){ // 사라졌죠
                map.delete(originalColor); // 사라졌으니까 제거
            }else{
                map.set(originalColor,reduceOriginalColor); // 사라지진 않았으니까, 개수 업데이트
            }
        }
        res.push(map.size);
        arr.set(position,color);
    }

    return res;
};