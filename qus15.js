//Qus14. Given an array of strings, use filter to create a new array with only the words that have more than 5 characters.

let arr = ['Ateek' ,'Sanjit','Sapna','Ap']
let result = arr.filter((element)=>{
    return element[0] == 'A'
})
console.log(result)