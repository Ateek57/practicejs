//qus6. Given an array of colors, use forEach to print a message with the color and its position in the array.
let arr = ['red','green','blue']
arr.forEach((element,index)=>{
    console.log(`given color is: ${element}`,`and position is: ${index}`)
})