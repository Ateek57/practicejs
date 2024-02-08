//qus5 Iterate over an array of objects using forEach and log each object's properties to the console.

let arrayobject = [{
   name: "aman",
},
{
    name: "sumit",
},
{
    name :"sanjit"
}]
arrayobject.forEach((element,index)=>{
    console.log(element,index)
})