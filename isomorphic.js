var isIsomorphic = function (s, t) {
    let sToT = {};
    let tToS = {};
  
    for (let x = 0; x < s.length; x++) {
      let sitem = s[x];
      let titem = t[x];
  
      // Check s -> t mapping
      if (!sToT[sitem]) {
        sToT[sitem] = titem;
      } else if (sToT[sitem] !== titem) {
        return false;
      }
  
      // Check t -> s mapping
      if (!tToS[titem]) {
        tToS[titem] = sitem;
      } else if (tToS[titem] !== sitem) {
        return false;
      }
    }
  
    return true;
  };
  

console.log(isIsomorphic("badc", "baba"));
