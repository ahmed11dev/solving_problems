
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
            return result.sort(function (val1, val2) {
             return /\d+/.exec(val1) - /\d+/.exec(val2);
           }).join('');
         }
       console.log(countString('aaaaaaaabccc')); 
