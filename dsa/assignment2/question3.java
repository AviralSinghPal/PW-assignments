import java.util.HashMap;

class Solution {
    public int findLHS(int[] nums) {
        HashMap<Integer, Integer> countMap = new HashMap<>();
        
        for (int num : nums) {
            if (countMap.containsKey(num)) {
                countMap.put(num, countMap.get(num) + 1);
            } else {
                countMap.put(num, 1);
            }
        }
        
        int maxLen = 0;
        
        for (int num : countMap.keySet()) {
            int currLen = 0;
            
            if (countMap.containsKey(num + 1)) {
                currLen = countMap.get(num) + countMap.get(num + 1);
            }
            
            maxLen = Math.max(maxLen, currLen);
        }
        
        return maxLen;
    }
}

// 594. Longest Harmonious Subsequence