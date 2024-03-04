pr1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("success")

    },100)
})
pr1.then(function handler(value){
    console.log(value)
})
