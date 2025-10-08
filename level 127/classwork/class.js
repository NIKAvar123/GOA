// 18. Create three Promises where one of them resolves immediately with the message "Instant Promise". Use Promise.race to log the message from the first Promise that resolve
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1");
//     }, 3000);   
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2");
//     }, 1000);   
// }); 
// let promise3 = Promise.resolve("Promise");

// Promise.race([promise1, promise2, promise3])
//     .then((message) => {
//         console.log(message);                
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });


























// 1. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.



const promise1 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,3000 ,"ip 17")
});

const promise2 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,1000 ,"ip 17 air")
});

const promise3 = new Promise ((resolve ,reject ) => {
    setTimeout (resolve ,2000 ,"ip 17 pro max")
});

Promise.all([promise1,promise2, promise3]).then((massage)=>{console.log(massage)})
