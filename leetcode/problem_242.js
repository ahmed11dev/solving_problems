/*

242. Valid Anagram

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    return (sortStr(s) === sortStr(t));
    
};
var sortStr = (str)=>{
    return str.split('').sort().join('')        
}
