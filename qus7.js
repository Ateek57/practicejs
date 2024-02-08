//qus7. Write a function that uses forEach to log only the even numbers from an array.

let arr = [2,3,4,5,6]
arr.forEach((element)=>{
    if(element%2 == 0){
        console.log(element)
    }
})