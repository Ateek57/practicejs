function createpromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("error happens")


        },100)
    })
}
pr= createpromise()
pr.then(function handler(value){}).catch((value)=>{
    console.log(value)
})