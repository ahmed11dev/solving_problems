
// js code

function countString(str) {
  let result = [];
  for (let L of str) {
    let regex = new RegExp(L, 'g');
    let arrOfString = str.match(regex);
    let put = L + arrOfString.length;
    if (!result.includes(put)) {
      result.push(put);
    }
  }
  return result.join("");
}

console.log(countString('aaabbbcc')); // a3b3c2