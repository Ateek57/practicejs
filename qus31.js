function promise1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(new Error('error'))
        },5)
    })
}
function promise2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(100)
        },1000)
    })
}
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },10)
    })
}
async function execution(){   
    try{
        const result= await Promise.race([promise1(),promise2(),promise3()])
            console.log(result)
        }
    catch(error){
        console.error(error.message)
    }
}
execution()