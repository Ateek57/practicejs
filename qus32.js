function createpromise(time,times){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(time<times){
                resolve("seccessfullydone")
            }
            else{
                reject('error')
            }
        },times)
        
    })
}
pr1= createpromise(400,300)
pr1.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.error(error)
})
