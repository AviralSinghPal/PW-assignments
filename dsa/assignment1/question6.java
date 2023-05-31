//217. Contains Duplicate


//approach 1 - nlog(n) complexity
import java.util.*;
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        System.out.print(Arrays.toString(nums));
        for(int i=0;i<nums.length-1;i++)
        {
            if(nums[i]==nums[i+1]) return true;     
        }
        return false;
    }
}

//aproach 2 = hashset

import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        
        for (int num : nums) {
            if (set.contains(num)) {
                return true; // Duplicate found
            }
            
            set.add(num);
        }
        
        return false; // No duplicates found
    }
}