function promise1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(300)
        },100)
    })
}
function promise2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('got the value')

        },1000)
    })
}
function promise3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(10)

        },10000)
    })
}
let promiseall = Promise.all([promise1(),promise2(),promise3()])
promiseall.then((result)=>{
    console.log("all promise are resolved")
},(result)=>{
    console.log("all promise are not resolved")
})