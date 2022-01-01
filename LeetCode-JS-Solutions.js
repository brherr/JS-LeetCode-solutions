// Roman to Integer (easy)

 var romanToInt = function(s) {
    
    const map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let count = 0;
    
    if(s.length === 1) return map[s[0]];
    
    for(let i=0; i<s.length; i++) {
        if(map[s[i]] < map[s[i+1]]) {
            count += (map[s[i+1]] - map[s[i]]);
            i++;
            
        } else{
            count += map[s[i]];
         }     
    }
    
    return count;
};