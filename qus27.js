pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("success")

    },100)
})
pr.then(function handler(value){
    console.log(value)
})