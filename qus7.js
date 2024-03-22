//qus7. Write a function that uses forEach to log only the even numbers from an array.

let array = [2,3,4,5,6]
array.forEach((element)=>{
    if(element%2 == 0){
        console.log(element)
    }
})
