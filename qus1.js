var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }
    
    const mp = {}
    for(let i=0;i<s.length;i++){
        if(mp[s[i]]){
            mp[s[i]]+=1;//if it is defined, occurance found increse frequency
        }else{
            mp[s[i]]=1;//if it is undefined then make frequency count
        }
    }
    for(let i=0;i<t.length;i++){
        if(mp[t[i]]===undefined){
            return false;
        }//there is charcter in t which is not present in s
        else{
            mp[t[i]] -= 1 //decrese the frequency
            if(mp[t[i]]==0){
                delete mp[t[i]] //if frequency is 0 delete occurance;
            }
        }
    }
    return Object.keys(mp).length == 0;
};