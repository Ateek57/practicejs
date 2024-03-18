//qus17 Write a function that uses filter to create a new array with only the strings that contain a specific substring.

function string(arr){
    let specific = 'ee';
    let res = arr.filter((element)=>{

        if(element.includes(specific)){
            return element;
        }
    })
    return res;


}
let value = string(['Ateek', 'Neelam','Sanjit'])
console.log(value)
