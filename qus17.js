//qus17 Write a function that uses filter to create a new array with only the strings that contain a specific substring.

function string(arr){
    let specific = 'ee';
    let result = arr.filter((element)=>{

        if(element.includes(specific)){
            return element;
        }
    })
    return result;


}
let value = string(['Ateek', 'Neelam','Sanjit'])
console.log(value)
