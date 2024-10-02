const arr = [1, 2, 3, 4];

function containsDuplicate(nums) {
    const [...unique] = new Set(nums);
    if (unique.length !== nums.length) {
        return true;
    } else {
        return false;
    }
};

console.log(containsDuplicate(arr));
