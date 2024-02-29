//reverse string 
var reverseWords = function(s) {
    let total = s.split(" ")
    total = total.filter(total => total!= "") //this line check for every word of      string if string is empty then return flase otherwise return true; 
    let n = total.length;
    let i = 0;
    let j = n-1;
    while(i<j){
        let temp = total[i]
        total[i] = total[j];
        total[j] = temp;
        i++;
        j--;
    }
    let final = total.join(" ")
    return final;
    
    
    
};