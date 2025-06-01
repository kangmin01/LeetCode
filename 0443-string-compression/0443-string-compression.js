/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let std = 1;
    let repeated = 1;
    let prev = "";
    let curr = ""
    const copy = [...chars]

    if (chars.length === 1) return;

    for (let i = 0; i < copy.length - 1; i++) {
        prev = copy[i];
        curr = copy[i + 1];

        if (prev === curr) {
            repeated++;
        } else {
            if (repeated > 1) {
                if (repeated >= 10) {
                    const newString = repeated.toString().split("");
                    chars.splice(std, repeated - 1, ...newString)
                    std += newString.length + 1;
                } else {
                    chars.splice(std, repeated - 1, repeated.toString())
                    std += 2;
                }
                repeated = 1;
            } else {
                std++;
            }
        }
    }

    if (repeated > 1) {
        if (repeated >= 10) {
            const newString = repeated.toString().split("");
            chars.splice(std, repeated - 1, ...newString)
            std += newString.length;
        } else {
            chars.splice(std, repeated - 1, repeated.toString())
            std += 2;
        }
        repeated = 1;
    }
};