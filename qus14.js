//qus14. Given an array of strings, use filter to create a new array with only the words that have more than 5 characters.

let arr = ['sanjit','Mohammad','danish', 'ram','lekha']
const res = arr.filter((element)=>{
    return element.length>5;
})
console.log(res);
