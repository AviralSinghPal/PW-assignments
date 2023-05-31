class Solution {
    public int searchInsert(int[] nums, int target) {
        return binSearch(nums,target,0,nums.length-1);
    }
    public int binSearch(int[] nums, int target, int left, int right){
        if(left > right) return left;
        int mid =left + (right - left) / 2;

        if(nums[mid] == target) return mid;
        else if(nums[mid] > target) {
            
            return binSearch(nums, target, left, mid - 1);
        } else {
            return binSearch(nums, target, mid + 1, right);
        }
    }
}

// 35. Search Insert Position
// 