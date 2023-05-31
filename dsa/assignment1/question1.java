
// appproach 1 using 2 pointer method
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Arrays.sort(nums); //approach works only for sorted array
        int a=0;
        int b=nums.length-1;
        
        while(b>a)
        {
            if((nums[a]+nums[b]) == target) return new int[]{a,b};
            else if((nums[a]+nums[b]) < target) ++a;
            else b--;
        }
        System.out.print(a+" "+b);
        return new int[0];
    }
}

//Using hashmap
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();

        for(int i = 0; i<nums.length; i++ ){
            int diff = target-nums[i];

            if(map.containsKey(diff)) 
                return new int[]{map.get(diff),i};
            map.put(nums[i],i);
        }
        return new int[0];
    }
}

