function createpromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("error occured 50%")
        },100)
    })
}
pr=createpromise()
pr.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
