function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseString = string.toLowerCase();
    
    for (let char of alphabet) {
        if (!lowerCaseString.includes(char)) {
            return false;
        }
    }
    
    return true;
}

//________________________________________________                                                      

function mergeArrays(a, b) {
  const out = Array.from(new Set(a.concat(b)))
  out.sort((a,b) => a - b)
  return out
}
