// Call back function

// function printString(){
//     console.log("Tom"); 
//     setTimeout(() =>  { console.log("Jacob"); }, 300); 
//    console.log("Mark")
//  }
 
//  printString();

// -------------------------------
// const Failed = false
// const Successful=true

// function  messageComingCallback(callback,errorCallback){
//     if(Failed){
//         errorCallback({
//             name:'Failed',
//             message:':('
//         })
//         } else if(Successful){
//             errorCallback({
//               name:'Successful',
//               message:' -Got you!'
//             })
//         }else {
//             callback('Well done you succeed')
//         }
// }

// messageComingCallback((message) => {

//     console.log('Success:'+ message)
// }, (error) =>{
//     console.log(error.name+ ''+ error.message)
// })

const Failed = false
const Successful=true

function  messageComingPromise(){
    return new Promise ((resolve, reject)=>{
        if(Failed){
            reject({
                name:'Failed',
                message:':('
            })
            } else if(Successful){
                reject({
                  name:'Successful',
                  message:' -Got you!'
                })
            }else {
                resolve('Well done you succeed')
            }
    })
  
}

messageComingPromise().then((message) => {

    console.log('Success:'+ message)
}).catch( (error) =>{
    console.log(error.name+ ''+ error.message)
})