// qus3. Use forEach to double each element in an array and store the results in a new array.

let arr = [2, 3, 4, 5]
let results = []
arr.forEach((element)=>{
    results.push(element*element)

})
console.log(results)