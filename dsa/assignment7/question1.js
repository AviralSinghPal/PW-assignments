/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    
    const mapS = new Map();
    const mapT = new Map();

    for(let i = 0; i<s.length; i++){
        if(!mapS.has(s.charAt(i)) && !mapT.has(t.charAt(i))){
          mapS.set(s.charAt(i),t.charAt(i));
          mapT.set(t.charAt(i),s.charAt(i));
        }
        else if(mapS.get(s.charAt(i)) !== t.charAt(i) || mapT.get(t.charAt(i)) !== s.charAt(i)) {
          return false;
          }       
    }
    return true;
    
};

// leetcode 205. Isomorphic Strings
