function topKFrequent(words, k) {
    const freqMap = new Map();
    for (const word of words) {
      freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }
  
    return words.sort((a, b) => {
      if (freqMap.get(a) === freqMap.get(b)) {
        return a.localeCompare(b);
      }
      return freqMap.get(b) - freqMap.get(a);
    }).slice(0, k);
  }
  
  // Test Example 1
  console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
  // Output: ["i", "love"]
  
  // Test Example 2
  console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
  // Output: ["the", "is", "sunny", "day"]
  