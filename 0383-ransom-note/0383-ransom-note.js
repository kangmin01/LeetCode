/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split("");
  magazine = magazine.split("");
  let cnt = 0;
  ransomNote.forEach((x, idx) => {
    const idx2 = magazine.indexOf(x);
    if (idx2 >= 0) {
      cnt++;
      magazine.splice(idx2, 1);
    }
  });
  return ransomNote.length === cnt ? true : false;
};