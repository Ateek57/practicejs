function delayedResolve(value, delay) {
    return new Promise((resolve,rej)=>{
      setTimeout(()=>{
       resolve(value);
      },delay);
    })
 }
 
 // Example usage:
 delayedResolve('Hello, Promise!', 2000)
   .then((result) => {
     console.log('Resolved:', result);
   })
   .catch((error) => {
     console.error('Error:', error);
    });