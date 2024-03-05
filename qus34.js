function createpromise(url){
    return new Promise((resolve, reject) => {
        console.log("started downloading the data",url)
        setTimeout(() => {
            resolve("xyz")
            
        },100);
    })
}
function promise2(data){
    return new Promise((resolve, reject) => {
        console.log("started saving the data")
        setTimeout(()=>{
            if(Math.random()<0.5){
                reject("data counld not saved")
            }
            else{
                resolve("data is saved")
            }
        },500)
    })
}

pr1=createpromise("www.xyz.com")
pr1.then((value)=>{
    console.log('data is downloaded successfully',value)
    return promise2(value)
})
.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
