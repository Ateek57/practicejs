//qus8.  Use forEach to iterate over an array of arrays and log the elements of each inner array.

let parentarr = [2,4,6,8]
let childarr = [1,3,5,7]
parentarr.forEach((element,index) =>{
    childarr.forEach((j, indexj)=>{
        if(index == indexj){
            console.log(j)
        }   
    })
})