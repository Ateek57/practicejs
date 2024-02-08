//qus16. Write a function that uses filter to create a new array with only the prime numbers from an existing array.
let arr= [3, 4, 11, 12, 17]
let result = arr.filter((element)=>{
    let count = 0;
    for(let i =1;i<=element; i++){
        if(element%i==0){
            count+=1
        }
        
    }
    if(count==2){
        return element;
    }
})

console.log(result)