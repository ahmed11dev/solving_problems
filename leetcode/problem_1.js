
/* 
Two Sum
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/
var twoSum = function (nums, target) {
    let y = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == (target - nums[i])) {
                y.push(i);
                y.push(j);
            }
        }
    }
    return y;
};