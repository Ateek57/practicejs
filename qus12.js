//Qus12. Write a function that uses map to create an array of the lengths of strings in a given array.
let arr = ['arav', 'ram','shyam']
let result = arr.map((element)=>{
    return element.length;
})

console.log(result)