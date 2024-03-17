//Qus13. Given two arrays of numbers, use map to create a new array where each element is the product of the corresponding elements in the two arrays.

let arr1 = [2,3,4]
let arr2 = [5,6,7]
const res = arr1.map((element1,index1)=>{
    return arr1[index1]*arr2[index1];
})
console.log(res)
    
