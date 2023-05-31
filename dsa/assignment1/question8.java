import java.util.HashSet;

class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int[] result = new int[2];
        
        HashSet<Integer> set = new HashSet<>();
        int duplicate = -1;
        int sum = (n * (n + 1)) / 2;
        
        for (int num : nums) {
            if (set.contains(num)) {
                duplicate = num;
            } else {
                set.add(num);
                sum -= num;
            }
        }
        
        result[0] = duplicate;
        result[1] = sum;
        
        return result;
    }
}
//645. Set Mismatch
