/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const map = new Map();
    for (let i = 0; i < supplies.length; i++) {
        map.set(supplies[i], 1)
    }

    // 재료를 돌면서 map에 추가하는데.. 재료로 요리를 쓰는 요리 또한 존재한다.
    // 이걸 계속 반복문을 돌아야하는가??

    let n = 100;
    while (n > 1) {
        for (let i = 0; i < ingredients.length; i++) {
            const canMake = ingredients[i].every((item) => {
                return map.get(item) > 0
            })
            // console.log(canMake)
            if (canMake) {
                map.set(recipes[i], 1)
                supplies.push(recipes[i])
            }
        }
        n--;
    }

    // console.log(map)
    let res = []
    for (let i = 0; i < ingredients.length; i++) {
        const canMake = ingredients[i].every((item) => {
            return map.get(item) > 0
        })
        // console.log(canMake)
        if (canMake) {
            res.push(recipes[i])
        }
    }

    return res;
};