import java.util.HashSet;

class Solution {
    public int distributeCandies(int[] candyType) {
        HashSet<Integer> uniqueCandies = new HashSet<>();
        
        for (int candy : candyType) {
            uniqueCandies.add(candy);
        }
        
        int maxTypes = uniqueCandies.size();
        int maxAllowed = candyType.length / 2;
        
        return Math.min(maxTypes, maxAllowed);
    }
}


//575. Distribute Candies
